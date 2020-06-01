import {
    WellKnownNamespaces,
    IConfiguration,
    ConfigurationKind,
    IServiceConfiguration,
    ServiceHost,
    IWindowConfiguration,
} from "@reactivemarkets/desktop-types";

import { ILogger } from "../logging";
import { IWindowService } from "../windowing";

import { ILauncherService } from "./iLauncherService";
import { normalizeUrl } from "./normalize";

export class ElectronServiceLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly windowFactory: IWindowService;

    public constructor(logger: ILogger, windowService: IWindowService) {
        this.logger = logger;
        this.windowFactory = windowService;
    }

    public canLaunch = (configuration: IConfiguration) => {
        if (configuration.kind !== ConfigurationKind.Service) {
            return false;
        }

        const serviceConfiguration = configuration.spec as IServiceConfiguration;

        return serviceConfiguration.host === ServiceHost.Electron;
    };

    public async launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const { affinity, main } = configuration.spec as IServiceConfiguration;

        const servicePath = normalizeUrl(main);

        this.logger.verbose(`launching ${namespace}/${name} from ${servicePath}`);

        const windowConfiguration: IWindowConfiguration = {
            affinity,
            show: false,
        };

        const window = await this.windowFactory.createWindow(windowConfiguration);

        await window.loadURL(servicePath);

        return configuration;
    }
}
