import { App } from "electron";

import { ReservedChannels } from "../../common";
import { routerService } from "../router";

export const registerOpenUrlEventsHandler = (app: App) => {
    app.on("open-url", (_, url) => {
        routerService.send(ReservedChannels.application_openUrl, {
            url,
        });
    });
};
