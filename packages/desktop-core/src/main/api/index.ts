import { globalShortcutIpcEvents } from "./globalShortcutIpcEvents";
import { windowIpcEvents } from "./windowIpcEvents";

export const registerIpcEventHandlers = () => {
    globalShortcutIpcEvents();
    windowIpcEvents();
};
