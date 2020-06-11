import { Accelerator, ipcMain } from "electron";
import { from } from "ix/iterable";
import { filter } from "ix/iterable/operators";
import { ReservedChannels } from "../../common";
import { globalShortcutService } from "../shortcuts";

export const globalShortcutIpcEvents = () => {
    const listenerMap = new Map<string, () => void>();

    ipcMain.on(ReservedChannels.globalShortcut_register, (event, accelerator: Accelerator) => {
        const acceleratorEvent = accelerator as string;

        const listener = () => {
            event.sender.send(ReservedChannels.globalShortcut_invoked, accelerator);
        };

        const key = `${event.sender.id}/${acceleratorEvent}`;
        listenerMap.set(key, listener);

        globalShortcutService.register(accelerator, listener);
    });
    ipcMain.on(ReservedChannels.globalShortcut_unregister, (event, accelerator: Accelerator) => {
        const acceleratorEvent = accelerator as string;

        const key = `${event.sender.id}/${acceleratorEvent}`;
        const listener = listenerMap.get(key);
        if (listener !== undefined) {
            listenerMap.delete(key);
            globalShortcutService.unregister(accelerator, listener);
        }
    });
    ipcMain.on(ReservedChannels.globalShortcut_unregisterAll, (event) => {
        from(listenerMap.entries())
            .pipe(filter(([key]) => key.startsWith(`${event.sender.id}/`)))
            .forEach(([key, listener]) => {
                const slash = key.lastIndexOf("/");
                const accelerator = key.slice(slash);
                globalShortcutService.unregister(accelerator, listener);
                listenerMap.delete(key);
            });
    });
};
