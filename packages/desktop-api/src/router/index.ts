import { pipeline } from "./pipelines";
import { Socket } from "./pipelines/iConnectionPipeline";
import { IRouterMessage } from "./pipelines/iRouterMessage";
import { MessageType } from "./pipelines/messageType";

export const wsRouter = (socket: Socket) => {
    pipeline.onOpen(socket);

    socket.on("close", (code, reason) => {
        pipeline.onClose(socket, code, reason);
    });

    socket.on("error", (error) => {
        pipeline.onError(socket, error);
    });

    socket.on("message", (message) => {
        if (typeof message !== "string") {
            socket.send(JSON.stringify({
                message: "Only string based message are supported.",
                type: MessageType.error,
            }));
            socket.terminate();

            return;
        }

        try {
            const routerMessage = JSON.parse(message) as IRouterMessage;
            switch (routerMessage.type) {
                case MessageType.publish:
                    pipeline.onPublish(socket, routerMessage);
                    break;
                case MessageType.subscribe:
                    pipeline.onSubscribe(socket, routerMessage);
                    break;
                case MessageType.unsubscribe:
                    pipeline.onUnsubscribe(socket, routerMessage);
                    break;
                default:
                    socket.send(JSON.stringify({
                        message: `unknown message type: ${routerMessage.type}`,
                        type: MessageType.error,
                    }));
            }
        } catch (error) {
            socket.send(JSON.stringify({
                message: "failed to parse message.",
                type: MessageType.error,
            }));
        }
    });

    socket.on("ping", (data) => {
        socket.pong(data);
    });

    socket.on("pong", (data) => {
        socket.ping(data);
    });
};
