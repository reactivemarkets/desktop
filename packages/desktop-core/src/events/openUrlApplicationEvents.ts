import { App } from "electron";

import { routerService } from "../router";
import { ReservedChannels } from "../transports";

export const registerOpenUrlEventsHandler = (app: App) => {
    app.on("open-url", (_, url) => {
        routerService.send(ReservedChannels.open_url, {
            url,
        });
    });
};
