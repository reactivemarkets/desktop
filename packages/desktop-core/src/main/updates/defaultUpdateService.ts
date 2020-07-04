import { IConfiguration, IUpdateSpecification } from "@reactivemarkets/desktop-types";
import { autoUpdater } from "electron-updater";
import { logger } from "../logging";
import { IUpdateService } from "./iUpdateService";

export class DefaultUpdateService implements IUpdateService {
    public configure(configuration: IConfiguration): Promise<IConfiguration> {
        const spec = configuration.spec as IUpdateSpecification | undefined;
        if (!spec?.checkForUpdates) {
            return Promise.resolve(configuration);
        }

        autoUpdater.logger = null;
        autoUpdater
            .on("checking-for-update", () => {
                logger.info("Checking for update...");
            })
            .on("update-available", () => {
                logger.info("Update available.");
            })
            .on("update-not-available", () => {
                logger.info("Update not available.");
            })
            .on("error", (error) => {
                logger.info(`Error in auto-updater. ${error}`);
            })
            .on("download-progress", (progress) => {
                const { bytesPerSecond, percent, total, transferred } = progress;

                logger.info(`Download speed: ${bytesPerSecond} Downloaded ${percent} (${transferred}/${total})`);
            })
            .on("update-downloaded", () => {
                logger.info("Update downloaded.");
            });

        if (spec?.channel !== undefined) {
            autoUpdater.channel = spec.channel;
        }

        if (spec?.provider !== undefined) {
            autoUpdater.setFeedURL({
                ...spec?.parameters,
                provider: spec.provider,
            });
        }

        autoUpdater.allowDowngrade = spec?.allowDowngrade ?? true;
        autoUpdater.allowPrerelease = spec?.allowPrerelease ?? false;
        autoUpdater.checkForUpdatesAndNotify();

        return Promise.resolve(configuration);
    }
}
