import { EventEmitter } from "events";

import { ITransport } from "./iTransport";

export class InProcessTransport extends EventEmitter implements ITransport {

    public on<T>(channel: string, callback: (data: T) => void) {

        super.on(channel, callback);

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {

        super.once(channel, callback);

        return this;
    }

    public send<T>(channel: string, data: T): void {
        super.emit(channel, data);
    }
}
