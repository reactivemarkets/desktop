import { ChildProcess } from "child_process";
import { EventEmitter } from "events";
import { ITransport } from "../iTransport";

export class ChildProcessIPCTransport extends EventEmitter implements ITransport {
    private readonly process: ChildProcess;

    public constructor(process: ChildProcess) {
        super();
        this.process = process;
        this.process.on("message", (message: IIPCMessage<unknown>) => {
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

    public send<T>(channel: string, data: T) {
        this.process.send({
            channel,
            data,
        });
    }
}
