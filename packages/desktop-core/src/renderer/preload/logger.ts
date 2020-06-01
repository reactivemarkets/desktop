import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class Logger {
    public debug = (message: string, ...meta: unknown[]) => {
        ipcRenderer.send(ReservedChannels.logger_debug, message, ...meta);
    };

    public error = (message: string, ...meta: unknown[]) => {
        ipcRenderer.send(ReservedChannels.logger_error, message, ...meta);
    };

    public info = (message: string, ...meta: unknown[]) => {
        ipcRenderer.send(ReservedChannels.logger_info, message, ...meta);
    };

    public verbose = (message: string, ...meta: unknown[]) => {
        ipcRenderer.send(ReservedChannels.logger_verbose, message, ...meta);
    };

    public warn = (message: string, ...meta: unknown[]) => {
        ipcRenderer.send(ReservedChannels.logger_warn, message, ...meta);
    };
}
