import { IDesktop } from "./iDesktop";
import { ILogger } from "./iLogger";

export class LoggerClient implements ILogger {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public debug(message: string, ...meta: unknown[]) {
        this.desktop.api.logger.debug(message, meta);
    }

    public error(message: string, ...meta: unknown[]) {
        this.desktop.api.logger.error(message, meta);
    }

    public info(message: string, ...meta: unknown[]) {
        this.desktop.api.logger.info(message, meta);
    }

    public verbose(message: string, ...meta: unknown[]) {
        this.desktop.api.logger.verbose(message, meta);
    }

    public warn(message: string, ...meta: unknown[]) {
        this.desktop.api.logger.warn(message, meta);
    }
}
