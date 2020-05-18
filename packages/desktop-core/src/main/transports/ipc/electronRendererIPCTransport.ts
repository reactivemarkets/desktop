import { ipcRenderer } from "electron";

import { ITransport } from "../iTransport";

export class ExectronRendererIPCTransport implements ITransport {
    public on<T>(channel: string, callback: (data: T) => void) {
        ipcRenderer.on(channel, (_: unknown, args: T) => {
            callback(args);
        });

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        ipcRenderer.once(channel, (_: unknown, args: T) => {
            callback(args);
        });

        return this;
    }

    public send = <T>(channel: string, data: T): void => {
        ipcRenderer.send(channel, data);
    };
}
