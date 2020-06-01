import { Accelerator, globalShortcut, ipcMain } from "electron";
import { ReservedChannels } from "../../common";

export const globalShortcutIpcEvents = () => {
    ipcMain.handle(ReservedChannels.globalShortcut_isRegistered, async (_, accelerator: Accelerator) => {
        return globalShortcut.isRegistered(accelerator);
    });
    ipcMain.on(ReservedChannels.globalShortcut_register, (event, accelerator: Accelerator) => {
        globalShortcut.register(accelerator, () => {
            const key = `${ReservedChannels.globalShortcut_invoked}/${accelerator}`;
            event.sender.send(key);
        });
    });
    ipcMain.on(ReservedChannels.globalShortcut_unregister, (_, accelerator: Accelerator) => {
        globalShortcut.unregister(accelerator);
    });
    ipcMain.on(ReservedChannels.globalShortcut_unregisterAll, () => {
        globalShortcut.unregisterAll();
    });
};
