import { IConfiguration } from "@reactivemarkets/desktop-types";
import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class Launcher {
    public launch = (configuration: IConfiguration) => {
        return ipcRenderer.invoke(ReservedChannels.launcher_launch, configuration);
    };
}
