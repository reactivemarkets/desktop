import { globalShortcutIpcEvents } from "./globalShortcutIpcEvents";
import { loggerIpcEvents } from "./loggerIpcEvents";
import { routerIpcEvents } from "./routerIpcEvents";
import { windowIpcEvents } from "./windowIpcEvents";

export const registerIpcEventHandlers = () => {
    globalShortcutIpcEvents();
    loggerIpcEvents();
    routerIpcEvents();
    windowIpcEvents();
};
