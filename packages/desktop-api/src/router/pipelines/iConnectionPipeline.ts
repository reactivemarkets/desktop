import * as WebSocket from "ws";
import { IRouterMessage } from "./iRouterMessage";

export type Socket = WebSocket & { id: string };

export interface IConnectionPipeline {
    onClose(socket: Socket, code: number, reason: string): void;
    onError(socket: Socket, error: Error): void;
    onOpen(socket: Socket): void;
    onPublish(socket: Socket, message: IRouterMessage): void;
    onSubscribe(socket: Socket, message: IRouterMessage): void;
    onUnsubscribe(socket: Socket, message: IRouterMessage): void;
}
