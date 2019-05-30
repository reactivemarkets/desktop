import { App } from "electron";

import { routerService } from "../router";
import { ReservedChannels } from "../transports";

export const registerSecondInstanceEventsHandler = (app: App) => {
    app.on("second-instance", (_, commandLine, directory) => {
        routerService.send(ReservedChannels.second_instance, {
            commandLine,
            directory,
        });
    });
};
