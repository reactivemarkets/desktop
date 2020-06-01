import { App } from "electron";
import { logger } from "../logging";

export const windowAllClosedApplicationEventsHandler = (app: App) => {
    app.on("window-all-closed", () => {
        logger.info("All windows closed, keeping app open.");
    });
};
