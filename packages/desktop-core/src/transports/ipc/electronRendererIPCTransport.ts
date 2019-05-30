import { ipcRenderer } from "electron";

import { ITransport } from "../iTransport";

export class ExectronRendererIPCTransport implements ITransport {

    public on<T>(channel: string, callback: (data: T) => void) {
        // tslint:disable-next-line:no-any
        ipcRenderer.on(channel, (_: any, args: T) => {
            callback(args);
        });

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        // tslint:disable-next-line:no-any
        ipcRenderer.once(channel, (_: any, args: T) => {
            callback(args);
        });

        return this;
    }

    public send = <T>(channel: string, data: T): void => {
        ipcRenderer.send(channel, data);
    }
}
