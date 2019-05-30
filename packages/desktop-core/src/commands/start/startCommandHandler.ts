import { app } from "electron";
import * as path from "path";

import { registerApplicationEventHandlers } from "../../events";
import { launcherService } from "../../launcher";
import { logger } from "../../logging";
import { registryService } from "../../registry";

export const handler = (options: IStartOptions) => {
    logger.verbose("start command ran.");

    const appLock = app.requestSingleInstanceLock();
    if (!appLock) {
        logger.info("another instance is already running. exiting...");
        app.exit();
    } else {
        app.enableMixedSandbox();
        app.setAsDefaultProtocolClient("desktop");
        registerApplicationEventHandlers(app);

        const onReady = new Promise<void>((resolve) => app.once("ready", resolve));

        const configPromises = new Array<Promise<void>>();

        logger.verbose("loading any urls");
        const urls = options.url;
        if (urls !== undefined) {
            const configFiles = urls.map(async (u) => {
                return registryService
                    .registerUrl(u)
                    .catch((error) => {
                        logger.warn(`failed to register config: ${error}`);
                    });
            });

            configPromises.push(...configFiles);
        }

        logger.verbose("loading any configuration files");
        const files = options.file;
        if (files !== undefined) {
            const configFiles = files.map(async (f) => {
                return registryService
                    .registerConfig(f)
                    .catch((error) => {
                        logger.warn(`failed to register config: ${error}`);
                    });
            });

            configPromises.push(...configFiles);
        }

        logger.verbose("loading any userData configuration files");
        const userDataPath = app.getPath("userData");
        const userConfigPath = path.join(userDataPath, "config");
        const userDataConfig =
            registryService
                .registerConfig(userConfigPath)
                .catch((error) => {
                    logger.warn(`failed to read cached config: ${error}`);
                });

        Promise
            .all([...configPromises, userDataConfig, onReady])
            .then(async () => registryService.getRegistry())
            .then(async (registry) => {
                const launched = registry.map(async (c) => {
                    return launcherService
                        .launch(c)
                        .then((config) => {
                            logger.info(`launched ${config.kind}: ${config.metadata.name}`);
                        })
                        .catch((error) => {
                            logger.error(`error launching ${c.metadata.name}: ${error}`);
                        });
                });

                return Promise.all(launched);
            })
            .then(() => {
                logger.info("application started.");
            })
            .catch((error) => {
                logger.error(`error starting: ${error}`);
                app.exit(1);
            });
    }
};
