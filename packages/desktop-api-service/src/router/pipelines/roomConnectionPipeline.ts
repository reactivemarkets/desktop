import { Namespace, Socket } from "socket.io";

import { IConnectionPipeline } from "./iConnectionPipeline";

export class RoomConnectionPipeline implements IConnectionPipeline {

    public onConnected = (_: Namespace, __: Socket) => {
        return;
    }

    public onDisconnected = (_: Namespace, __: Socket) => {
        return;
    }

    public onError = (_: Namespace, __: Socket, ___: Error) => {
        return;
    }

    public onPublish = (namespace: Namespace, _: Socket, message: IRouterMessage) => {
        namespace
            .to(message.topic)
            .emit(message.topic, message.data);
    }

    public onSubscribe = (_: Namespace, socket: Socket, topic: string) => {
        socket.join(topic);
    }

    public onUnsubscribe = (_: Namespace, socket: Socket, topic: string) => {
        socket.leave(topic);
    }
}
