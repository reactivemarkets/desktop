import { ChildProcess } from "child_process";
import { ITransport } from "../iTransport";

export class ChildProcessIPCTransport implements ITransport {
    private readonly process: ChildProcess;

    public constructor(process: ChildProcess) {
        this.process = process;
    }

    public on<T>(channel: string, callback: (data: T) => void) {
        this.process.on("message", (message: IIPCMessage<T>) => {
            if (message.channel === channel) {
                callback(message.data);
            }
        });

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        this.process.once("message", (message: IIPCMessage<T>) => {
            if (message.channel === channel) {
                callback(message.data);
            }
        });

        return this;
    }

    public send<T>(channel: string, data: T) {
        this.process.send({
            channel,
            data,
        });
    }
}
