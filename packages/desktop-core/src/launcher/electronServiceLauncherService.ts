import {
    ConfigurationKind, IConfiguration, IServiceConfiguration, IWindowConfiguration, ServiceHost, WellKnownNamespaces,
} from "../configuration";
import { ILogger } from "../logging";
import { IWindowFactory } from "../windowing";

import { ILauncherService } from "./iLauncherService";
import { normalize } from "./normalize";

export class ElectronServiceLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly windowFactory: IWindowFactory;

    public constructor(logger: ILogger, windowService: IWindowFactory) {
        this.logger = logger;
        this.windowFactory = windowService;
    }

    public canLaunch = (configuration: IConfiguration) => {
        if (configuration.kind !== ConfigurationKind.Service) {
            return false;
        }

        const serviceConfiguration = configuration.spec as IServiceConfiguration;

        return serviceConfiguration.host === ServiceHost.Electron;
    }

    public async launch(configuration: IConfiguration) {

        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const serviceConfiguration = configuration.spec as IServiceConfiguration;

        const servicePath = normalize(serviceConfiguration.main);

        this.logger.verbose(`launching ${namespace}/${name} from ${servicePath}`);

        const windowConfiguration: IWindowConfiguration = {
            affinity: serviceConfiguration.affinity,
            show: false,
        };

        return this
            .windowFactory
            .createWindow(windowConfiguration)
            .then(async (window) => {
                window.loadURL(servicePath);

                return Promise.resolve(configuration);
            });
    }
}
