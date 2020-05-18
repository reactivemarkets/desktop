import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export const logger = {
    debug: (message: string, ...meta: unknown[]) => ipcRenderer.send(ReservedChannels.logger_debug, message, ...meta),
    error: (message: string, ...meta: unknown[]) => ipcRenderer.send(ReservedChannels.logger_error, message, ...meta),
    info: (message: string, ...meta: unknown[]) => ipcRenderer.send(ReservedChannels.logger_info, message, ...meta),
    verbose: (message: string, ...meta: unknown[]) =>
        ipcRenderer.send(ReservedChannels.logger_verbose, message, ...meta),
    warn: (message: string, ...meta: unknown[]) => ipcRenderer.send(ReservedChannels.logger_warn, message, ...meta),
};
