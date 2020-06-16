import { ipcRenderer } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { ReservedChannels } from "../../common";

export class Router {
    #emitter = new TypedEmitter();

    public constructor() {
        ipcRenderer.on(ReservedChannels.router_events, (_, channel, payload) => {
            this.#emitter.emit(channel, payload);
        });
    }

    public publish = <T>(channel: string, payload: T) => {
        ipcRenderer.send(ReservedChannels.router_publish, channel, payload);
    };

    public subscribe = <T>(channel: string, listener: (payload: T) => void) => {
        const listenerCount = this.#emitter.listenerCount(channel);
        this.#emitter.addListener(channel, listener);

        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.router_subscribe, channel);
        }
    };

    public unsubscribe = <T>(channel: string, listener: (payload: T) => void) => {
        this.#emitter.removeListener(channel, listener);

        const listenerCount = this.#emitter.listenerCount(channel);
        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.router_unsubscribe, channel);
        }
    };

    public unsubscribeAll = () => {
        this.#emitter.eventNames().forEach((event) => {
            this.#emitter.removeAllListeners(event);
        });
        ipcRenderer.send(ReservedChannels.router_unsubscribeAll);
    };
}
