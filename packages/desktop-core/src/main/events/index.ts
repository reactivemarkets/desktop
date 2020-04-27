import { App } from "electron";

import { disableRemoteEventsHandler } from "./disableRemoteEvents";
import { registerLoginEventsHandler } from "./loginApplicationEvents";
import { registerOpenUrlEventsHandler } from "./openUrlApplicationEvents";
import { registerSecondInstanceEventsHandler } from "./secondInstanceApplicationEvents";
import { whiteListNavigationEvents } from "./whiteListNavigationEvents";

export * from "./loginApplicationEvents";

export const registerApplicationEventHandlers = (app: App) => {
    disableRemoteEventsHandler(app);
    whiteListNavigationEvents(app);
    registerSecondInstanceEventsHandler(app);
    registerOpenUrlEventsHandler(app);
    registerLoginEventsHandler(app);
};
