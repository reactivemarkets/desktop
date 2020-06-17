import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import { registerIpcEventHandlers } from "../../api";
import { registerApplicationEventHandlers } from "../../events";
import { configurationGenerator, configurationLoader } from "../../configuration";
import { launcherService } from "../../launcher";
import { logger } from "../../logging";
import { registerApplicationMenu } from "../../menu";
import { registryService } from "../../registry";

export const handler = async (options: IStartOptions) => {
    logger.verbose("Start command ran.");

    if (!app.hasSingleInstanceLock()) {
        const appLock = app.requestSingleInstanceLock();
        if (!appLock) {
            logger.info("Another instance is already running. exiting...");
            app.exit();

            return;
        }

        app.enableSandbox();
        app.allowRendererProcessReuse = true;
        if (app.isPackaged) {
            const appName = app.name.toLowerCase();
            app.setAppUserModelId(appName);
            app.setAsDefaultProtocolClient(appName);
        }
        registerIpcEventHandlers();
        registerApplicationEventHandlers(app);
        registerApplicationMenu();
    }

    const onReady = app.whenReady();

    const configPromises = new Array<Promise<IConfiguration | undefined>>();

    const urls = options.url;
    if (urls !== undefined) {
        logger.verbose("Loading urls specified", urls);

        const configFiles = urls.map(async (url) => {
            try {
                const configuration = await configurationGenerator.generate(ConfigurationKind.Application, url, url);

                await registryService.register(configuration);

                return configuration;
            } catch (error) {
                logger.error(`Failed to register config: ${error}`);
            }
        });

        configPromises.push(...configFiles);
    }

    const files = options.file;
    if (files !== undefined) {
        logger.verbose("Loading configuration files", files);

        files.forEach(async (f) => {
            const configurationArray = await configurationLoader.load(f);

            const configFiles = configurationArray.map(async (configuration) => {
                try {
                    await registryService.register(configuration);

                    return configuration;
                } catch (error) {
                    logger.error(`Failed to register config: ${error}`);
                }
            });

            configPromises.push(...configFiles);
        });
    }

    try {
        const registry = await Promise.all(configPromises);

        await onReady;

        const launched = registry
            .filter((c) => c !== undefined)
            .map(async (config) => {
                try {
                    const instance = await launcherService.launch(config!);

                    logger.info(`Launched ${instance.kind}: ${instance.metadata.name}`);
                } catch (error) {
                    logger.error(`Failed to launch ${config!.metadata.name}: ${error}`);
                }
            });

        await Promise.all(launched);
    } catch (error) {
        logger.error(`Error starting config: ${error}`);
    }
};
