import { IConnectionPipeline, Socket } from "./iConnectionPipeline";
import { IRouterMessage } from "./iRouterMessage";

export class LoggingConnectionPipeline implements IConnectionPipeline {
    public onClose = (socket: Socket, code: number, reason: string) => {
        console.log(`${socket.id} closed with ${code} ${reason}`);
    };

    public onError = (socket: Socket, error: Error) => {
        console.log(`${socket.id} errored: ${error}`);
    };

    public onPublish = (socket: Socket, message: IRouterMessage) => {
        console.log(`${socket.id} published on ${message.channel}`);
    };

    public onSubscribe = (socket: Socket, message: IRouterMessage) => {
        console.log(`${socket.id} subscribed to ${message.channel}`);
    };

    public onUnsubscribe = (socket: Socket, message: IRouterMessage) => {
        console.log(`${socket.id} unsubscribed from ${message.channel}`);
    };

    public onOpen = (socket: Socket) => {
        console.log(`${socket.id} opened.`);
    };
}
