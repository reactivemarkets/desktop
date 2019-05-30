import { App } from "electron";

import { registerLoginEventsHandler } from "./loginApplicationEvents";
import { registerOpenUrlEventsHandler } from "./openUrlApplicationEvents";
import { registerSecondInstanceEventsHandler } from "./secondInstanceApplicationEvents";

export * from "./loginApplicationEvents";
export * from "./openUrlApplicationEvents";
export * from "./secondInstanceApplicationEvents";

export const registerApplicationEventHandlers = (app: App) => {
    registerSecondInstanceEventsHandler(app);
    registerOpenUrlEventsHandler(app);
    registerLoginEventsHandler(app);
};
