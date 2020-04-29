import { Accelerator, ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export const globalShortcut = {
    isRegistered: (accelerator: Accelerator) => ipcRenderer.invoke(ReservedChannels.globalShortcut_isRegistered, accelerator),
    register: (accelerator: Accelerator, listener: () => void) => {
        const channel = `${ReservedChannels.globalShortcut_invoked}/${accelerator}`;
        ipcRenderer.on(channel, (_) => listener());
        ipcRenderer.send(ReservedChannels.globalShortcut_register, accelerator);
    },
    unregister: (accelerator: Accelerator, listener: () => void) => {
        const channel = `${ReservedChannels.globalShortcut_invoked}/${accelerator}`;
        ipcRenderer.removeListener(channel, listener);
        ipcRenderer.invoke(ReservedChannels.globalShortcut_unregister, accelerator);
    },
    unregisterAll: () => ipcRenderer.invoke(ReservedChannels.globalShortcut_unregisterAll),
};
