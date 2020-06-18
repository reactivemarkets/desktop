import { App } from "electron";
import { cleanCommandLine, parseCommandLine, urlToCommandLine } from "../configuration/commandLine";
import { logger } from "../logging";

export const registerOpenUrlEventsHandler = (app: App) => {
    app.on("open-url", async (event, desktopUrl) => {
        try {
            logger.verbose(`open-url invoked with url: ${desktopUrl}`);

            event.preventDefault();

            const commandLine = urlToCommandLine(desktopUrl);

            const cleanedCommandLine = cleanCommandLine(commandLine);

            parseCommandLine(cleanedCommandLine, false);
        } catch (error) {
            logger.error(`Failed to parse sent command line: ${error}`);
        }
    });
};
