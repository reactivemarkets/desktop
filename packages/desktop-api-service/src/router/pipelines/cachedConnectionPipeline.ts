import { Namespace, Socket } from "socket.io";

import { IConnectionPipeline } from "./iConnectionPipeline";

export class CachedConnectionPipeline implements IConnectionPipeline {
    private readonly map = new Map<string, IRouterMessage>();

    public onConnected = (_: Namespace, __: Socket) => {
        return;
    }

    public onDisconnected = (_: Namespace, __: Socket) => {
        return;
    }

    public onError = (_: Namespace, __: Socket, ___: Error) => {
        return;
    }

    public onPublish(_: Namespace, __: Socket, message: IRouterMessage): void {
        if (message.cache === true) {
            this.map.set(message.topic, message);
        }
    }

    public onSubscribe(_: Namespace, socket: Socket, topic: string): void {
        if (this.map.has(topic)) {
            const message = this.map.get(topic);

            if (message !== undefined) {
                socket.emit(topic, message.data);
            }
        }
    }

    public onUnsubscribe = (_: Namespace, __: Socket, ___: string) => {
        return;
    }
}
