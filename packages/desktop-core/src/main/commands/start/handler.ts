import { ConfigurationKind } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import * as path from "path";

import { registerIpcEventHandlers } from "../../api";
import { registerApplicationEventHandlers } from "../../events";
import { launcherService } from "../../launcher";
import { logger } from "../../logging";
import { registryService } from "../../registry";
import { configurationGenerator, configurationLoader } from "../../configuration";
import { buildAppMenu } from "../../menu";

export const handler = (options: IStartOptions) => {
    logger.verbose("Start command ran.");

    const appLock = app.requestSingleInstanceLock();
    if (!appLock) {
        logger.info("Another instance is already running. exiting...");
        app.exit();
    } else {
        app.enableSandbox();
        app.allowRendererProcessReuse = true;
        app.setAsDefaultProtocolClient("desktop");
        registerIpcEventHandlers();
        registerApplicationEventHandlers(app);
        buildAppMenu();

        const onReady = app.whenReady();

        const configPromises = new Array<Promise<void>>();

        logger.verbose("Loading any urls");
        const urls = options.url;
        if (urls !== undefined) {
            const configFiles = urls.map(async (url) => {
                const configuration = await configurationGenerator.generate(ConfigurationKind.Application, url, url);

                return registryService.register(configuration).catch((error) => {
                    logger.warn(`Failed to register config: ${error}`);
                });
            });

            configPromises.push(...configFiles);
        }

        logger.verbose("Loading any configuration files");
        const files = options.file;
        if (files !== undefined) {
            const configFiles = files.map(async (f) => {
                const configurationArray = await configurationLoader.load(f);

                const promises = configurationArray.map((configuration) => {
                    return registryService.register(configuration).catch((error) => {
                        logger.warn(`failed to register config: ${error}`);
                    });
                });

                await Promise.all(promises);
            });

            configPromises.push(...configFiles);
        }

        logger.verbose("Loading any userData configuration files");
        const userDataPath = app.getPath("userData");
        const userConfigPath = path.join(userDataPath, "config");
        const userDataConfig = configurationLoader
            .load(userConfigPath)
            .then(async (configurationArray) => {
                const promises = configurationArray.map((configuration) => {
                    return registryService.register(configuration).catch((error) => {
                        logger.verbose(`Failed to read cached config: ${error}`);
                    });
                });

                await Promise.all(promises);
            })
            .catch((error) => {
                logger.verbose(`Failed to read userData configuration: ${error}`);
            });

        Promise.all([...configPromises, userDataConfig, onReady])
            .then(async () => registryService.getRegistry())
            .then(async (registry) => {
                const launched = registry.map(async (c) => {
                    return launcherService
                        .launch(c)
                        .then((config) => {
                            logger.info(`Launched ${config.kind}: ${config.metadata.name}`);
                        })
                        .catch((error) => {
                            logger.error(`Failed to launch ${c.metadata.name}: ${error}`);
                        });
                });

                return Promise.all(launched);
            })
            .then(() => {
                logger.info("Desktop started.");
            })
            .catch((error) => {
                logger.error(`Error starting: ${error}`);
                app.exit(1);
            });
    }
};
