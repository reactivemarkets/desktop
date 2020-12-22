import { IConfiguration, IUpdatePolicySpecification } from "@reactivemarkets/desktop-types";
import { app, Notification } from "electron";
import { autoUpdater, UpdateDownloadedEvent } from "electron-updater";
import { CronJob, job } from "cron";
import numeral from "numeral";
import { logger } from "../logging";
import { IUpdateService } from "./iUpdateService";

export class DefaultUpdateService implements IUpdateService {
    private cronJob?: CronJob;

    public create(configuration: IConfiguration): Promise<IConfiguration> {
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

                this.cronJob?.stop();
            })
            .on("update-not-available", () => {
                logger.info("Update not available.");
            })
            .on("error", (error) => {
                logger.info(`Error in auto-updater. ${error?.message}`);
            })
            .on("download-progress", (progress) => {
                const { bytesPerSecond, percent, total, transferred } = progress;

                const downloadSpeed = numeral(bytesPerSecond).format("0.0b");

                const percentComplete = numeral(percent).format("0.0");

                const transferredBytes = numeral(transferred).format("0.0b");

                const totalBytes = numeral(total).format("0.0b");

                logger.info(`${percentComplete}% => (${transferredBytes}/${totalBytes}) ${downloadSpeed}/s`);
            })
            .once("update-downloaded", (update: UpdateDownloadedEvent) => {
                const { version } = update;
                logger.info(`${version} downloaded.`);

                const notification = new Notification({
                    title: "A new update is ready to install",
                    body: `${app.name} version ${version} has been downloaded, click to restart now.`,
                });
                notification.once("click", () => {
                    autoUpdater.quitAndInstall(true, true);
                });
                notification.show();
            });

        if (spec.channel !== undefined) {
            autoUpdater.channel = spec.channel;
        }

        if (spec.provider !== undefined) {
            autoUpdater.setFeedURL({
                ...spec?.parameters,
                provider: spec.provider,
            });
        }

        if (spec.schedule !== undefined) {
            this.cronJob = job(spec.schedule, () => {
                autoUpdater.checkForUpdates();
            });
            this.cronJob.start();
        }

        autoUpdater.allowDowngrade = spec?.allowDowngrade ?? true;
        autoUpdater.allowPrerelease = spec?.allowPrerelease ?? false;
        autoUpdater.checkForUpdates();

        return Promise.resolve(configuration);
    }
}
