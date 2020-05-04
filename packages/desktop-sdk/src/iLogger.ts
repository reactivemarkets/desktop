export interface ILogger {
    debug(message: string, ...meta: any[]): void;
    error(message: string, ...meta: any[]): void;
    info(message: string, ...meta: any[]): void;
    verbose(message: string, ...meta: any[]): void;
    warn(message: string, ...meta: any[]): void;
}
