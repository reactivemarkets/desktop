import ipc from "node-ipc";
import { IIpcExternalMain } from "./iIpcExternalMain";
import { IIpcExternalResult } from "./iIpcExternalResult";

export class NodeIpcExternalMain implements IIpcExternalMain {
    private readonly appSpace = "com.reactivemarkets.";
    private readonly connectId = "desktop_ipc";

    public handle(channel: string, listener: (args?: any) => any): void {
        ipc.server.on(channel, (data, socket) => {
            const { responseId } = data;
            const result: IIpcExternalResult = {};
            try {
                result.result = listener(data);
            } catch (error) {
                result.error = error.message;
            }
            ipc.server.emit(socket, responseId, result);
        });
    }

    public whenReady() {
        return new Promise<void>((resolve) => {
            ipc.config.appspace = this.appSpace;
            ipc.config.id = this.connectId;
            ipc.config.silent = true;
            ipc.serve(() => {
                resolve();
            });
            ipc.server.start();
        });
    }
}
