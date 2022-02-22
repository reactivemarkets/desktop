import { globalShortcutIpcEvents } from "./globalShortcutIpcEvents";
import { loggerIpcEvents } from "./loggerIpcEvents";
import { routerIpcEvents } from "./routerIpcEvents";
import { windowIpcEvents } from "./windowIpcEvents";
import { registryIpcEvents } from "./registryIpcEvents";
import { systemIpcEvents } from "./systemIpcEvents";
import { launcherIpcEvents } from "./launcherIpcEvents";
import { externalIpcEvents } from "./externalIpcEvents";
import { screenIpcEvents } from "./screenIpcEvents";
import { storageIpcEvents } from "./storageIpcEvents";

export const registerIpcEventHandlers = (context?: string) => {
    externalIpcEvents(context);
    globalShortcutIpcEvents();
    launcherIpcEvents();
    loggerIpcEvents();
    registryIpcEvents();
    routerIpcEvents();
    screenIpcEvents();
    storageIpcEvents();
    systemIpcEvents();
    windowIpcEvents();
};
