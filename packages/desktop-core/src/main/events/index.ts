import { App } from "electron";

import { disableRemoteEventsHandler } from "./disableRemoteEventsHandler";
import { registerLoginEventsHandler } from "./loginApplicationEventsHandler";
import { registerOpenUrlEventsHandler } from "./openUrlApplicationEventsHandler";
import { registerSecondInstanceEventsHandler } from "./secondInstanceApplicationEventsHandler";
import { whiteListNavigationEventsHandler } from "./whiteListNavigationEvents";
import { windowAllClosedApplicationEventsHandler } from "./windowAllClosedApplicationEventsHandler";
import { unhandledErrorEventsHandler } from "./unhandledErrorEventsHandler";

export * from "./loginApplicationEventsHandler";

export const registerApplicationEventHandlers = (app: App) => {
    disableRemoteEventsHandler(app);
    whiteListNavigationEventsHandler(app);
    registerSecondInstanceEventsHandler(app);
    registerOpenUrlEventsHandler(app);
    registerLoginEventsHandler(app);
    windowAllClosedApplicationEventsHandler(app);
    unhandledErrorEventsHandler();
};
