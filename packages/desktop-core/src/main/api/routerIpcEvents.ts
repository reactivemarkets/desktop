import { ipcMain } from "electron";
import { ReservedChannels } from "../../common";

export const routerIpcEvents = () => {
    ipcMain.on(ReservedChannels.router_publish, (_, channel: string, payload: any) => {
        // pub
    });
    ipcMain.on(ReservedChannels.router_subscribe, (_, channel: string) => {
        // sub
    });
    ipcMain.handle(ReservedChannels.router_unsubscribe, (_, channel: string) => {
        // unsub
    });
};
