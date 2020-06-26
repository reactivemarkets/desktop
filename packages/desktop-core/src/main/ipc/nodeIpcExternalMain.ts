import { app } from "electron";
import ipc from "node-ipc";
import { IIpcExternalMain } from "./iIpcExternalMain";
import { IIpcExternalResult } from "./iIpcExternalResult";

export class NodeIpcExternalMain implements IIpcExternalMain {
    private readonly appSpace = "com.reactivemarkets";
    private readonly connectId = "external_ipc";

    public handle(channel: string, listener: (args?: any) => Promise<any> | any): void {
        ipc.server.on(channel, async (data, socket) => {
            const { responseId } = data;
            const result: IIpcExternalResult = {};
            try {
                result.result = await listener(data);
            } catch (error) {
                result.error = error.message;
            }
            ipc.server.emit(socket, responseId, result);
        });
    }

    public whenReady(context?: string) {
        return new Promise<void>((resolve) => {
            const appName = app.name.toLowerCase();
            const appSpace = `${this.appSpace}.${appName}.`;
            ipc.config.appspace = context === undefined ? appSpace : `${appSpace}${context}.`;
            ipc.config.id = this.connectId;
            ipc.config.silent = true;
            ipc.serve(() => {
                resolve();
            });
            ipc.server.start();
        });
    }
}
