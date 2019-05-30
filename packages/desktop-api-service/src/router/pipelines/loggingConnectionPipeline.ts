import { Namespace, Socket } from "socket.io";

import { IConnectionPipeline } from "./iConnectionPipeline";

export class LoggingConnectionPipeline implements IConnectionPipeline {

    public onConnected = (_: Namespace, socket: Socket) => {
        console.log(`${socket.id} connected.`);
    }

    public onDisconnected = (_: Namespace, socket: Socket) => {
        console.log(`${socket.id} disconnected.`);
    }

    public onError = (_: Namespace, socket: Socket, error: Error) => {
        console.log(`${socket.id} errored: ${error}`);
    }

    public onPublish = (_: Namespace, socket: Socket, message: IRouterMessage) => {
        console.log(`${socket.id} published message on ${message.topic}, cached: ${message.cache}`);
    }

    public onSubscribe = (_: Namespace, socket: Socket, topic: string) => {
        console.log(`${socket.id} subscribed to ${topic}`);
    }

    public onUnsubscribe = (_: Namespace, socket: Socket, topic: string) => {
        console.log(`${socket.id} unsubscribed from ${topic}`);
    }
}
