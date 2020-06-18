import { App } from "electron";
import { cleanCommandLine, parseCommandLine, urlToCommandLine } from "../configuration/commandLine";
import { logger } from "../logging";

export const registerSecondInstanceEventsHandler = (app: App) => {
    app.on("second-instance", (event, commandLine) => {
        try {
            logger.verbose(`second-instance invoked with command line: ${JSON.stringify(commandLine)}`);

            event.preventDefault();

            let cleanedCommandLine = cleanCommandLine(commandLine);
            const desktopArg = cleanedCommandLine.find((arg) => arg.startsWith("desktop://"));
            if (desktopArg !== undefined) {
                cleanedCommandLine = urlToCommandLine(desktopArg);
            }

            parseCommandLine(cleanedCommandLine, false);
        } catch (error) {
            logger.error(`Failed to parse sent command line: ${error}`);
        }
    });
};
