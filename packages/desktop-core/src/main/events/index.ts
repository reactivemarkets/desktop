import { App } from "electron";

import { disableRemoteEventsHandler } from "./disableRemoteEvents";
import { registerLoginEventsHandler } from "./loginApplicationEvents";
import { registerOpenUrlEventsHandler } from "./openUrlApplicationEvents";
import { registerSecondInstanceEventsHandler } from "./secondInstanceApplicationEvents";
import { whiteListNavigationEvents } from "./whiteListNavigationEvents";
import { windowAllClosedApplicationEventsHandler } from "./windowAllClosedApplicationEvents";

export * from "./loginApplicationEvents";

export const registerApplicationEventHandlers = (app: App) => {
    disableRemoteEventsHandler(app);
    whiteListNavigationEvents(app);
    registerSecondInstanceEventsHandler(app);
    registerOpenUrlEventsHandler(app);
    registerLoginEventsHandler(app);
    windowAllClosedApplicationEventsHandler(app);
};
