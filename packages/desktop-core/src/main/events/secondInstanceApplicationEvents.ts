import { App } from "electron";

import { ReservedChannels } from "../../common";
import { routerService } from "../router";

export const registerSecondInstanceEventsHandler = (app: App) => {
    app.on("second-instance", (_, commandLine, directory) => {
        routerService.send(ReservedChannels.application_second_instance, {
            commandLine,
            directory,
        });
    });
};
