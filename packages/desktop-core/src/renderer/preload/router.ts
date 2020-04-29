import { ipcRenderer } from "electron";

import { ReservedChannels } from "../../common";

export const router = {
    publish: <T>(channel: string, payload: T) => {
        ipcRenderer.send(ReservedChannels.router_publish, channel, payload);
    },
    subscribe: <T>(channel: string, listener: (payload: T) => void) => {
        const subscribeChannel = `${ReservedChannels.router_subscribe}/${channel}`;
        ipcRenderer.on(subscribeChannel, (_, ...args) => listener(args[0]));
        ipcRenderer.send(ReservedChannels.router_subscribe, channel);
    },
    unsubscribe: <T>(channel: string, listener: (payload: T) => void) => {
        const subscribeChannel = `${ReservedChannels.router_subscribe}/${channel}`;
        ipcRenderer.removeListener(subscribeChannel, listener);
        ipcRenderer.invoke(ReservedChannels.router_unsubscribe, channel);
    },
};
