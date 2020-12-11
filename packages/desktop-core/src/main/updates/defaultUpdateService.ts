import { IConfiguration, IUpdatePolicySpecification } from "@reactivemarkets/desktop-types";
import { autoUpdater } from "electron-updater";
import numeral from "numeral";
import { logger } from "../logging";
import { IUpdateService } from "./iUpdateService";

export class DefaultUpdateService implements IUpdateService {
    public configure(configuration: IConfiguration): Promise<IConfiguration> {
        const spec = configuration.spec as IUpdatePolicySpecification | undefined;
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

                const downloadSpeed = numeral(bytesPerSecond).format("0.0b");

                const percentComplete = numeral(percent).format("0.0");

                const transferredBytes = numeral(transferred).format("0.0b");

                const totalBytes = numeral(total).format("0.0b");

                logger.info(`${percentComplete}% => (${transferredBytes}/${totalBytes}) ${downloadSpeed}/s`);
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
