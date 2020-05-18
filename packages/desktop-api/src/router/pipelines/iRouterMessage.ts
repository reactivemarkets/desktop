import { MessageType } from "./messageType";

export interface IRouterMessage {
    readonly channel: string;
    readonly data: unknown;
    readonly type: MessageType;
}
