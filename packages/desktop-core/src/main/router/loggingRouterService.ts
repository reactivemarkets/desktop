import { ILogger } from "../logging";
import { ITransport } from "../transports";
import { IRouterService } from "./iRouterService";

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

    public off<T>(channel: string, callback: (data: T) => void) {
        this.logger.verbose(`Removing listener from ${channel}`);

        this.routerService.off(channel, callback);
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
