import { Accelerator, ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class GlobalShortcut {
    public isRegistered = (accelerator: Accelerator) => {
        return ipcRenderer.invoke(ReservedChannels.globalShortcut_isRegistered, accelerator);
    };

    public register = (accelerator: Accelerator, listener: () => void) => {
        const channel = `${ReservedChannels.globalShortcut_invoked}/${accelerator}`;
        ipcRenderer.on(channel, () => listener());
        ipcRenderer.send(ReservedChannels.globalShortcut_register, accelerator);
    };

    public unregister = (accelerator: Accelerator, listener: () => void) => {
        const channel = `${ReservedChannels.globalShortcut_invoked}/${accelerator}`;
        ipcRenderer.off(channel, listener);
        ipcRenderer.send(ReservedChannels.globalShortcut_unregister, accelerator);
    };

    public unregisterAll = () => {
        ipcRenderer.send(ReservedChannels.globalShortcut_unregisterAll);
    };
}
