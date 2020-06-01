import { globalShortcutIpcEvents } from "./globalShortcutIpcEvents";
import { loggerIpcEvents } from "./loggerIpcEvents";
import { routerIpcEvents } from "./routerIpcEvents";
import { windowIpcEvents } from "./windowIpcEvents";
import { registryIpcEvents } from "./registryIpcEvents";
import { systemIpcEvents } from "./systemIpcEvents";
import { launcherIpcEvents } from "./launcherIpcEvents";

export const registerIpcEventHandlers = () => {
    globalShortcutIpcEvents();
    launcherIpcEvents();
    loggerIpcEvents();
    registryIpcEvents();
    routerIpcEvents();
    systemIpcEvents();
    windowIpcEvents();
};
