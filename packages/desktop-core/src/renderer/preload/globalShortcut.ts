import { Accelerator, ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export const globalShortcut = {
    isRegistered: (accelerator: Accelerator) => ipcRenderer.invoke(ReservedChannels.globalShortcut_isRegistered, accelerator),
    register: (accelerator: Accelerator, callback: () => void) => {
        ipcRenderer.on(`${ReservedChannels.globalShortcut_invoked}/${accelerator}`, () => callback());
        ipcRenderer.send(ReservedChannels.globalShortcut_register, accelerator);
    },
    unregister: (accelerator: Accelerator) => ipcRenderer.invoke(ReservedChannels.globalShortcut_unregister, accelerator),
    unregisterAll: () => ipcRenderer.invoke(ReservedChannels.globalShortcut_unregisterAll),
};
