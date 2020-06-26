import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import * as path from "path";
import { registerIpcEventHandlers } from "../../api";
import { configurationGenerator, configurationLoader } from "../../configuration";
import { registerApplicationEventHandlers } from "../../events";
import { launcherService } from "../../launcher";
import { logger } from "../../logging";
import { registerApplicationMenu } from "../../menu";
import { registryService } from "../../registry";

export const handler = async (options: IStartOptions) => {
    const { context } = options;

    logger.verbose("Start command ran.", context);

    const configPromises = new Array<Promise<IConfiguration | undefined>>();

    if (!app.hasSingleInstanceLock()) {
        if (context === undefined) {
            const appLock = app.requestSingleInstanceLock();
            if (!appLock) {
                logger.info("Another instance is already running. exiting...");
                app.exit();

                return;
            }
        }

        app.enableSandbox();
        app.allowRendererProcessReuse = true;

        if (context === undefined && app.isPackaged) {
            app.setAppUserModelId(`ReactiveMarkets.${app.name}`);
            const lowerCaseName = app.name.toLowerCase();
            logger.verbose(`Registering app as default protocol for ${lowerCaseName}`);
            if (!app.setAsDefaultProtocolClient(lowerCaseName)) {
                logger.warn(`Failed to register default protocol client for ${lowerCaseName}`);
            }
        }

        registerIpcEventHandlers(context);
        registerApplicationEventHandlers(app);
        registerApplicationMenu();

        try {
            const appPath = app.getAppPath();

            const resourcesPath = path.dirname(appPath);

            const defaults = path.join(resourcesPath, "defaults.yaml");

            const configurationArray = await configurationLoader.load(defaults);

            const configFiles = configurationArray.map(async (configuration) => {
                try {
                    await registryService.register(configuration);

                    return configuration;
                } catch (error) {
                    logger.error(`Failed to register default config: ${error}`);
                }
            });

            configPromises.push(...configFiles);
        } catch (error) {
            logger.error(`Failed to load default config: ${error}`);
        }
    }

    const urls = options.url;
    if (urls !== undefined) {
        logger.verbose("Loading urls specified", urls);

        const configFiles = urls.map(async (url) => {
            try {
                const configuration = await configurationGenerator.generate({
                    kind: ConfigurationKind.Application,
                    name: url,
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

        const configFilePromises = files.map(async (f) => {
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

                return configFiles;
            } catch (error) {
                logger.error(`Failed to load config: ${error}`);
            }
        });

        const configOrUndefined = await Promise.all(configFilePromises);

        const configFiles = configOrUndefined
            .flat()
            .filter((p) => p !== undefined)
            .map((p) => p!);

        configPromises.push(...configFiles);
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
