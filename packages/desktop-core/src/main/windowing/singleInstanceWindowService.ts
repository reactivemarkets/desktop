import { IConfiguration, IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { IWindowService } from "./iWindowService";
import { ILogger } from "../logging";

export class SingleInstanceWindowService implements IWindowService {
    private readonly logger: ILogger;
    private readonly windowService: IWindowService;

    public constructor(logger: ILogger, windowService: IWindowService) {
        this.logger = logger;
        this.windowService = windowService;
    }

    public all() {
        return this.windowService.all();
    }

    public from(identifier: string | IConfiguration) {
        return this.windowService.from(identifier);
    }

    public async create(configuration: IConfiguration) {
        const spec = configuration.spec as IApplicationSpecification;
        if (spec.singleInstance !== true) {
            return await this.windowService.create(configuration);
        }

        const window = this.from(configuration);
        if (window !== undefined) {
            this.logger.info(
                `${configuration.metadata.namespace}/${configuration.metadata.name} already exists and is single instance, moving to top.`,
            );
            window.instance.moveTop();
            return window;
        }

        return await this.windowService.create(configuration);
    }
}
