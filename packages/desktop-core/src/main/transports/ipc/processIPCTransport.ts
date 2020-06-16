import { EventEmitter } from "events";
import { ITransport } from "../iTransport";

export class ProcessIPCTransport extends EventEmitter implements ITransport {
    public constructor() {
        super();

        process.on("message", (message: IIPCMessage<unknown>) => {
            this.emit(message.channel, message.data);
        });
    }

    public off<T>(channel: string, callback: (data: T) => void) {
        this.off(channel, callback);

        return this;
    }

    public on<T>(channel: string, callback: (data: T) => void) {
        this.on(channel, callback);

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        this.once(channel, callback);

        return this;
    }

    public send = <T>(channel: string, data: T) => {
        if (process.send === undefined) {
            return;
        }

        process.send({
            channel,
            data,
        });
    };
}
