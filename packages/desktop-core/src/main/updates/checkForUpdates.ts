import { autoUpdater } from "electron-updater";
import { app } from "electron";
import { logger } from "../logging";

export const checkForUpdates = async () => {
    try {
        await app.whenReady();

        autoUpdater.on("checking-for-update", () => {
            logger.info("Checking for update...");
        });

        autoUpdater.on("update-available", () => {
            logger.info("Update available.");
        });

        autoUpdater.on("update-not-available", () => {
            logger.info("Update not available.");
        });

        autoUpdater.on("error", (err) => {
            logger.info("Error in auto-updater. " + err);
        });

        autoUpdater.on("download-progress", (progressObj) => {
            let log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + " - Downloaded " + progressObj.percent + "%";
            log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
            logger.info(log_message);
        });

        autoUpdater.on("update-downloaded", () => {
            logger.info("Update downloaded");
        });

        await autoUpdater.checkForUpdatesAndNotify();
    } catch (error) {
        logger.error(`Failed to check for updates: ${error}`);
    }
};
