import { App } from "electron";
import { cleanCommandLine, parseCommandLine, urlToCommandLine } from "../configuration/commandLine";
import { logger } from "../logging";

export const registerSecondInstanceEventsHandler = (app: App) => {
    app.on("second-instance", (event, commandLine) => {
        try {
            event.preventDefault();

            let cleanedCommandLine = cleanCommandLine(commandLine);
            if (cleanedCommandLine.length === 1 && cleanedCommandLine[0].startsWith("desktop://")) {
                cleanedCommandLine = urlToCommandLine(cleanedCommandLine[0]);
            }

            parseCommandLine(cleanedCommandLine, false);
        } catch (error) {
            logger.error(`Failed to parse sent command line: ${error}`);
        }
    });
};
