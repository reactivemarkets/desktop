import { app } from "electron";
import ipc from "node-ipc";
import { nanoid } from "nanoid";
import { IIpcExternal } from "./iIpcExternal";
import { IIpcExternalResult } from "./iIpcExternalResult";

export class NodeIpcExternal implements IIpcExternal {
    private readonly appSpace = "com.reactivemarkets";
    private readonly connectId = "external_ipc";

    public invoke<TData, TResult>(channel: string, data?: TData): Promise<TResult> {
        return new Promise<TResult>((resolve, reject) => {
            const responseId = nanoid();
            ipc.of.external_ipc.on(responseId, ({ error, result }: IIpcExternalResult) => {
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

            ipc.of.external_ipc.emit(channel, message);
        });
    }

    public on<T>(channel: string, listener: (data: T) => void) {
        ipc.of.external_ipc.on(channel, listener);
    }

    public whenReady(context?: string) {
        return new Promise<void>((resolve, reject) => {
            const appName = app.name.toLowerCase();
            const appSpace = `${this.appSpace}.${appName}.`;
            ipc.config.appspace = context === undefined ? appSpace : `${appSpace}${context}.`;
            ipc.config.id = nanoid();
            ipc.config.maxRetries = 0;
            ipc.config.silent = true;
            ipc.connectTo(this.connectId, () => {
                ipc.of.external_ipc.on("error", (error: Error) => {
                    reject(error);
                });
                ipc.of.external_ipc.on("connect", () => {
                    resolve();
                });
            });
        });
    }
}
