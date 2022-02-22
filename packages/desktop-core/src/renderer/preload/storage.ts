import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class Storage {
    public getStorage = (namespace?: string) => {
        return ipcRenderer.invoke(ReservedChannels.storage_get, namespace);
    };
}
