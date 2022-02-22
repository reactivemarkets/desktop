import { WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { ipcMain } from "electron";
import { ReservedChannels } from "../../common";
import { storageService } from "../storage";

export const storageIpcEvents = () => {
    ipcMain.handle(ReservedChannels.storage_get, (_, namespace = WellKnownNamespace.desktop) => {
        return storageService.fromNamespace(namespace);
    });
};
