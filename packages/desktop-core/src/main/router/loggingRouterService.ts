import { ILogger } from "../logging";

import { IRouterService } from "./iRouterService";
import { ITransport } from "../transports";

export class LoggingRouterService implements IRouterService {
    private readonly logger: ILogger;
    private readonly routerService: IRouterService;

    public constructor(logger: ILogger, routerService: IRouterService) {
        this.logger = logger;
        this.routerService = routerService;
    }

    public addTransport(transport: ITransport) {
        this.logger.verbose("Adding transport to router");

        return this.routerService.addTransport(transport);
    }

    public on<T>(channel: string, callback: (data: T) => void) {
        this.logger.verbose(`Listening to ${channel}`);

        this.routerService.on(channel, callback);
    }

    public once<T>(channel: string, callback: (data: T) => void) {
        this.logger.verbose(`Listening to ${channel} once`);

        this.routerService.once(channel, callback);
    }

    public removeTransport(id: string) {
        this.logger.verbose(`Removing ${id} transport from router`);

        return this.routerService.removeTransport(id);
    }

    public send<T>(channel: string, data: T): void {
        this.logger.info(`Sending ${JSON.stringify(data)} to ${channel}`);

        this.routerService.send(channel, data);
    }
}
