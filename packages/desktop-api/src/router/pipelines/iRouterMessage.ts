// tslint:disable:no-any

import { MessageType } from "./messageType";

export interface IRouterMessage {
    readonly channel: string;
    readonly data: any;
    readonly type: MessageType;
}
