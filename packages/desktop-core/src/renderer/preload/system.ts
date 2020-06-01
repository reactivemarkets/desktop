import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class System {
    public quit = () => {
        return ipcRenderer.invoke(ReservedChannels.system_quit);
    };

    public showAboutPanel = () => {
        return ipcRenderer.invoke(ReservedChannels.system_showAboutPanel);
    };
}
