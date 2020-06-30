import { IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import { registerIpcEventHandlers } from "../../api";
import { registerApplicationEventHandlers } from "../../events";
import { launcherService } from "../../launcher";
import { logger } from "../../logging";
import { registerApplicationMenu } from "../../menu";
import { registerDefaults, registerUrls, registerConfigFiles, registerProtocol } from "./register";
import { checkForUpdates } from "../../updates";

export const handler = async (options: IStartOptions) => {
    const { context } = options;

    logger.verbose("Start command ran.", context);

    const configPromises = new Array<Promise<IConfiguration | undefined>>();

    if (!app.hasSingleInstanceLock()) {
        if (context === undefined) {
            const appLock = app.requestSingleInstanceLock();
            if (!appLock) {
                logger.info("Another instance is already running. Sending command and exiting...");
                app.exit();

                return;
            }

            registerProtocol();
        }

        app.enableSandbox();
        app.allowRendererProcessReuse = true;
        registerIpcEventHandlers(context);
        registerApplicationEventHandlers(app);
        registerApplicationMenu();
        checkForUpdates();

        try {
            const configFiles = await registerDefaults();

            configPromises.push(...configFiles);
        } catch (error) {
            logger.error(`Failed to load default config: ${error}`);
        }
    }

    const urls = options.url;
    if (urls !== undefined) {
        logger.verbose("Loading urls specified", urls);

        const configFiles = registerUrls(urls);

        configPromises.push(...configFiles);
    }

    const files = options.file;
    if (files !== undefined) {
        try {
            logger.verbose("Loading configuration files", files);

            const configFiles = await registerConfigFiles(files);

            configPromises.push(...configFiles);
        } catch (error) {
            logger.error(`Failed to load configuration files: ${error}`);
        }
    }

    try {
        const registry = await Promise.all(configPromises);

        await app.whenReady();

        const launched = registry
            .filter((c) => c !== undefined)
            .map((c) => c!)
            .filter(({ spec }) => {
                if (spec === undefined) {
                    return true;
                }

                if ("launchOnStart" in spec) {
                    return spec.launchOnStart !== false;
                }

                return true;
            })
            .map(async (config) => {
                try {
                    const instance = await launcherService.launch(config);

                    logger.info(`Launched ${instance.kind}: ${instance.metadata.name}`);
                } catch (error) {
                    logger.error(`Failed to launch ${config.metadata.name}: ${error}`);
                }
            });

        await Promise.all(launched);
    } catch (error) {
        logger.error(`Error starting config: ${error}`);
    }
};
