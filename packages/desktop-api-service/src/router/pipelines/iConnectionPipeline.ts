import { Namespace, Socket } from "socket.io";

export interface IConnectionPipeline {
    onConnected(namespace: Namespace, socket: Socket): void;
    onDisconnected(namespace: Namespace, socket: Socket): void;
    onError(namespace: Namespace, socket: Socket, error: Error): void;
    onPublish(namespace: Namespace, socket: Socket, message: IRouterMessage): void;
    onSubscribe(namespace: Namespace, socket: Socket, topic: string): void;
    onUnsubscribe(namespace: Namespace, socket: Socket, topic: string): void;
}
