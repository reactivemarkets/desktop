import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class System {
    public getAppVersion = () => {
        return ipcRenderer.invoke(ReservedChannels.system_getAppVersion);
    };

    public getVersions = () => {
        return ipcRenderer.invoke(ReservedChannels.system_getVersions);
    };

    public quit = () => {
        return ipcRenderer.invoke(ReservedChannels.system_quit);
    };

    public showAboutPanel = () => {
        return ipcRenderer.invoke(ReservedChannels.system_showAboutPanel);
    };
}
