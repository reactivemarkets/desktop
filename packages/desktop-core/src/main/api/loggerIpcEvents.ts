import { ipcMain } from "electron";
import { ReservedChannels } from "../../common";
import { logger } from "../logging";

export const loggerIpcEvents = () => {
    ipcMain.on(ReservedChannels.logger_debug, (_, ...args) => {
        const [message, ...meta] = args;

        logger.debug(message, ...meta);
    });
    ipcMain.on(ReservedChannels.logger_error, (_, ...args) => {
        const [message, ...meta] = args;

        logger.error(message, ...meta);
    });
    ipcMain.on(ReservedChannels.logger_info, (_, ...args) => {
        const [message, ...meta] = args;

        logger.info(message, ...meta);
    });
    ipcMain.on(ReservedChannels.logger_verbose, (_, ...args) => {
        const [message, ...meta] = args;

        logger.verbose(message, ...meta);
    });
    ipcMain.on(ReservedChannels.logger_warn, (_, ...args) => {
        const [message, ...meta] = args;

        logger.warn(message, ...meta);
    });
};
