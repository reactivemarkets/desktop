import { App } from "electron";
import { cleanCommandLine, parseCommandLine } from "../configuration/commandLine";
import { logger } from "../logging";

export const registerSecondInstanceEventsHandler = (app: App) => {
    app.on("second-instance", (event, commandLine) => {
        try {
            logger.verbose(`second-instance invoked with command line: ${JSON.stringify(commandLine)}`);

            event.preventDefault();

            const cleanedCommandLine = cleanCommandLine(commandLine);

            parseCommandLine(cleanedCommandLine, false);
        } catch (error) {
            logger.error(`Failed to parse sent command line: ${error}`);
        }
    });
};
