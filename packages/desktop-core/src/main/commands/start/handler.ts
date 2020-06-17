import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";
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
                const name = uniqueNamesGenerator({
                    dictionaries: [adjectives, colors, animals],
                });

                const configuration = await configurationGenerator.generate({
                    kind: ConfigurationKind.Application,
                    name,
                    url,
                });

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
            try {
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
            } catch (error) {
                logger.error(`Failed to load config: ${error}`);
            }
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
