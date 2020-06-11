import { IConfiguration, IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { IWindowService } from "./iWindowService";

export class SingleInstanceWindowService implements IWindowService {
    private readonly windowService: IWindowService;

    public constructor(windowService: IWindowService) {
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
            return window;
        }

        return await this.windowService.create(configuration);
    }
}
