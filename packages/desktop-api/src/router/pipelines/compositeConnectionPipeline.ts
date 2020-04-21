import { Namespace, Socket } from "socket.io";

import { IConnectionPipeline } from "./iConnectionPipeline";

export class CompositeConnectionPipeline implements IConnectionPipeline {
    private readonly pipelines: IConnectionPipeline[];

    public constructor(...pipelines: IConnectionPipeline[]) {
        this.pipelines = pipelines;
    }

    public onConnected(namespace: Namespace, socket: Socket) {
        this.pipelines.forEach((p) => {
            p.onConnected(namespace, socket);
        });
    }

    public onDisconnected(namespace: Namespace, socket: Socket) {
        this.pipelines.forEach((p) => {
            p.onDisconnected(namespace, socket);
        });
    }

    public onError(namespace: Namespace, socket: Socket, error: Error) {
        this.pipelines.forEach((p) => {
            p.onError(namespace, socket, error);
        });
    }

    public onPublish(namespace: Namespace, socket: Socket, message: IRouterMessage) {
        this.pipelines.forEach((p) => {
            p.onPublish(namespace, socket, message);
        });
    }

    public onSubscribe(namespace: Namespace, socket: Socket, topic: string) {
        this.pipelines.forEach((p) => {
            p.onSubscribe(namespace, socket, topic);
        });
    }

    public onUnsubscribe(namespace: Namespace, socket: Socket, topic: string) {
        this.pipelines.forEach((p) => {
            p.onUnsubscribe(namespace, socket, topic);
        });
    }
}
