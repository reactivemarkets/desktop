import { BrowserWindow, ipcMain } from "electron";

import { ITransport } from "../iTransport";

export class ExectronMainIPCTransport implements ITransport {

    public on<T>(channel: string, callback: (data: T) => void) {
        // tslint:disable-next-line:no-any
        ipcMain.on(channel, (_: any, args: T) => {
            callback(args);
        });

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        // tslint:disable-next-line:no-any
        ipcMain.once(channel, (_: any, args: T) => {
            callback(args);
        });

        return this;
    }

    public send = <T>(channel: string, data: T): void => {
        BrowserWindow
            .getAllWindows()
            .forEach((window) => {
                window.webContents.send(channel, data);
            });
    }
}
