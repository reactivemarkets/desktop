import { ITransport } from "../iTransport";

export class ProcessIPCTransport implements ITransport {

    public on<T>(channel: string, callback: ((data: T) => void)) {
        process.on("message", (message: IIPCMessage<T>) => {
            if (message.channel === channel) {
                callback(message.data);
            }
        });

        return this;
    }

    public once<T>(channel: string, callback: ((data: T) => void)) {
        process.once("message", (message: IIPCMessage<T>) => {
            if (message.channel === channel) {
                callback(message.data);
            }
        });

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
    }
}
