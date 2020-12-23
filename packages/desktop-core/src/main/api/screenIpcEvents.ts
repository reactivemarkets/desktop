import { ipcMain, Point, screen } from "electron";
import { ReservedChannels } from "../../common";

export const screenIpcEvents = () => {
    const listenerMap = new Map<string, (...args: unknown[]) => void>();

    ipcMain.handle(ReservedChannels.screen_allDisplays, () => {
        return screen.getAllDisplays();
    });
    ipcMain.handle(ReservedChannels.screen_cursorScreenDisplay, () => {
        const point = screen.getCursorScreenPoint();

        return screen.getDisplayNearestPoint(point);
    });
    ipcMain.handle(ReservedChannels.screen_cursorScreenPoint, () => {
        return screen.getCursorScreenPoint();
    });
    ipcMain.handle(ReservedChannels.screen_displayNearestPoint, (_, point: Point) => {
        return screen.getDisplayNearestPoint(point);
    });
    ipcMain.handle(ReservedChannels.screen_primaryDisplay, () => {
        return screen.getPrimaryDisplay();
    });
    ipcMain.on(ReservedChannels.screen_off, (event, screenEvent) => {
        const key = `${event.sender.id}/${screenEvent}`;
        const listener = listenerMap.get(key);
        if (listener !== undefined) {
            listenerMap.delete(key);
            screen.off(screenEvent, listener);
        }
    });
    ipcMain.on(ReservedChannels.screen_on, (event, screenEvent) => {
        const listener = () => {
            event.sender.send(ReservedChannels.screen_events, screenEvent);
        };

        const key = `${event.sender.id}/${screenEvent}`;
        listenerMap.set(key, listener);

        screen.on(screenEvent, listener);
    });
};
