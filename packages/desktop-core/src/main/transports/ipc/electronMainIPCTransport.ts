import { BrowserWindow, ipcMain } from "electron";
import { ITransport } from "../iTransport";

export class ExectronMainIPCTransport implements ITransport {
    public on<T>(channel: string, callback: (data: T) => void) {
        ipcMain.on(channel, (_: unknown, args: T) => {
            callback(args);
        });

        return this;
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        ipcMain.once(channel, (_: unknown, args: T) => {
            callback(args);
        });

        return this;
    }

    public send = <T>(channel: string, data: T): void => {
        BrowserWindow.getAllWindows().forEach((window) => {
            window.webContents.send(channel, data);
        });
    };
}
