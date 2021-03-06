import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import * as path from "path";
import { configurationGenerator, configurationLoader } from "../../configuration";
import { logger } from "../../logging";
import { registryService } from "../../registry";

export const registerConfigFiles = async (files: string[]) => {
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

    return configOrUndefined
        .flat()
        .filter((p) => p !== undefined)
        .map((p) => p!);
};

export const registerDefaults = async (appDefaultsFile = "app-defaults.yml") => {
    const appPath = app.getAppPath();

    const resourcesPath = path.dirname(appPath);

    const defaults = path.join(resourcesPath, appDefaultsFile);

    const configurationArray = await configurationLoader.load(defaults);

    const configFiles = configurationArray.map(async (configuration) => {
        try {
            await registryService.register(configuration);

            return configuration;
        } catch (error) {
            logger.error(`Failed to register default config: ${error}`);
        }
    });

    return configFiles;
};

export const registerProtocol = () => {
    if (!app.isPackaged) {
        return;
    }

    const lowerCaseName = app.name.toLowerCase();
    logger.info(`Registering app as default protocol for ${lowerCaseName}`);

    if (process.platform === "win32") {
        if (!app.removeAsDefaultProtocolClient(lowerCaseName)) {
            logger.warn(`Failed to remove existing default protocol client for ${lowerCaseName}`);
        }
    }

    if (!app.setAsDefaultProtocolClient(lowerCaseName)) {
        logger.warn(`Failed to register new default protocol client for ${lowerCaseName}`);
    }
};

export const registerUrls = (urls: string[]) => {
    return urls.map(async (url) => {
        try {
            const configuration = await configurationGenerator.generate({
                kind: WellKnownConfigurationKind.Application,
                name: url,
                url,
            });

            await registryService.register(configuration);

            return configuration;
        } catch (error) {
            logger.error(`Failed to register config: ${error}`);
        }
    });
};
