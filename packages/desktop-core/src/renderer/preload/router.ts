import { ipcRenderer } from "electron";

import { ReservedChannels } from "../../common";

export class Router {
    public publish = <T>(channel: string, payload: T) => {
        ipcRenderer.send(ReservedChannels.router_publish, channel, payload);
    };

    public subscribe = <T>(channel: string, listener: (payload: T) => void) => {
        const subscribeChannel = `${ReservedChannels.router_subscribe}/${channel}`;
        ipcRenderer.on(subscribeChannel, (_, ...args) => listener(args[0]));
        ipcRenderer.send(ReservedChannels.router_subscribe, channel);
    };

    public unsubscribe = <T>(channel: string, listener: (payload: T) => void) => {
        const subscribeChannel = `${ReservedChannels.router_subscribe}/${channel}`;
        ipcRenderer.removeListener(subscribeChannel, listener);
        ipcRenderer.send(ReservedChannels.router_unsubscribe, channel);
    };

    public unsubscribeAll = () => {
        ipcRenderer.send(ReservedChannels.router_unsubscribeAll);
    };
}
