import { IWindowFactory } from "./iWindowFactory";
import { IConfiguration, IApplicationSpecification } from "@reactivemarkets/desktop-types";

export class ContentProtectionWindowFactory implements IWindowFactory {
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);

        const spec = configuration.spec as IApplicationSpecification | undefined;
        if (spec?.contentProtection !== undefined) {
            window.setContentProtection(spec.contentProtection);
        }

        return window;
    }
}
