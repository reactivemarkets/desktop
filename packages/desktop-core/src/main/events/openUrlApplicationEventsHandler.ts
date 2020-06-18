import { App } from "electron";
import { cleanCommandLine, parseCommandLine } from "../configuration/commandLine";
import { logger } from "../logging";

export const registerOpenUrlEventsHandler = (app: App) => {
    app.on("open-url", (event, desktopUrl) => {
        try {
            logger.verbose(`open-url invoked with url: ${desktopUrl}`);

            event.preventDefault();

            const cleanedCommandLine = cleanCommandLine([desktopUrl]);

            parseCommandLine(cleanedCommandLine, false);
        } catch (error) {
            logger.error(`Failed to parse sent command line: ${error}`);
        }
    });
};
