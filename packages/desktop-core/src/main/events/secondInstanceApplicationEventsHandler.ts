import { App } from "electron";
import { cleanCommandLine, parseCommandLine } from "../configuration/commandLine";

export const registerSecondInstanceEventsHandler = (app: App) => {
    app.on("second-instance", (_, commandLine) => {
        const cleanedCommandLine = cleanCommandLine(commandLine);

        parseCommandLine(cleanedCommandLine, false);
    });
};
