import { Namespace, Socket } from "socket.io";

import { pipeline } from "./pipelines";

export const router = (namespace: Namespace, socket: Socket) => {
    pipeline.onConnected(namespace, socket);

    socket.on("disconnect", () => {
        pipeline.onDisconnected(namespace, socket);
    });

    socket.on("subscribe", (topic: string) => {
        pipeline.onSubscribe(namespace, socket, topic);
    });

    socket.on("unsubscribe", (topic: string) => {
        pipeline.onUnsubscribe(namespace, socket, topic);
    });

    socket.on("publish", (message: IRouterMessage) => {
        pipeline.onPublish(namespace, socket, message);
    });

    socket.on("error", (error: Error) => {
        pipeline.onError(namespace, socket, error);
    });
};
