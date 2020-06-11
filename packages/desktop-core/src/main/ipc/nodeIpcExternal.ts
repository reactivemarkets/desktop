import ipc from "node-ipc";
import { v4 as uuid } from "uuid";
import { IIpcExternal } from "./iIpcExternal";
import { IIpcExternalResult } from "./iIpcExternalResult";

export class NodeIpcExternal implements IIpcExternal {
    private readonly connectId = "desktop";

    public invoke<TData, TResult>(channel: string, data: TData): Promise<TResult> {
        return new Promise<TResult>((resolve, reject) => {
            const responseId = uuid();
            ipc.of.desktop.on(responseId, ({ error, result }: IIpcExternalResult) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

            const message = {
                ...data,
                responseId,
            };

            ipc.of.desktop.emit(channel, message);
        });
    }

    public whenReady() {
        return new Promise<void>((resolve, reject) => {
            ipc.config.id = uuid();
            ipc.config.maxRetries = 0;
            ipc.config.silent = true;
            ipc.connectTo(this.connectId, () => {
                ipc.of.desktop.on("error", (error: Error) => {
                    reject(error);
                });
                ipc.of.desktop.on("connect", () => {
                    resolve();
                });
            });
        });
    }
}
