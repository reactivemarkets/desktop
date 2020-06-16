import { ipcMain } from "electron";
import { from } from "ix/iterable";
import { filter } from "ix/iterable/operators";
import { ReservedChannels } from "../../common";
import { routerService } from "../router";

export const routerIpcEvents = () => {
    const listenerMap = new Map<string, (payload: unknown) => void>();
    ipcMain.on(ReservedChannels.router_publish, (_, channel: string, payload: unknown) => {
        routerService.send(channel, payload);
    });
    ipcMain.on(ReservedChannels.router_subscribe, (event, channel: string) => {
        const listener = (payload: unknown) => {
            event.sender.send(ReservedChannels.router_events, channel, payload);
        };

        const key = `${event.sender.id}/${channel}`;
        listenerMap.set(key, listener);

        routerService.on(channel, listener);
    });
    ipcMain.on(ReservedChannels.router_unsubscribe, (event, channel: string) => {
        const key = `${event.sender.id}/${channel}`;
        const listener = listenerMap.get(key);
        if (listener !== undefined) {
            listenerMap.delete(key);
            routerService.off(channel, listener);
        }
    });
    ipcMain.on(ReservedChannels.router_unsubscribeAll, (event) => {
        from(listenerMap.entries())
            .pipe(filter(([key]) => key.startsWith(`${event.sender.id}/`)))
            .forEach(([key, listener]) => {
                const slash = key.lastIndexOf("/");
                const channel = key.slice(slash);
                routerService.off(channel, listener);
                listenerMap.delete(key);
            });
    });
};
