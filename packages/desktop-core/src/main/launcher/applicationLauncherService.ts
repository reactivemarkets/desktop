import { ConfigurationKind, IApplicationConfiguration, IConfiguration, WellKnownNamespaces } from "../configuration";
import { ILogger } from "../logging";
import { IWindowService } from "../windowing";

import { ILauncherService } from "./iLauncherService";

export class ApplicationLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly windowService: IWindowService;

    public constructor(logger: ILogger, windowService: IWindowService) {
        this.logger = logger;
        this.windowService = windowService;
    }

    public canLaunch = (configuration: IConfiguration) => {
        return configuration.kind === ConfigurationKind.Application;
    };

    public async launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const applicationConfiguration = configuration.spec as IApplicationConfiguration;

        this.logger.verbose(`launching ${namespace}/${name} from ${applicationConfiguration.url}`);

        return this.windowService.createWindow(applicationConfiguration.window).then(async (window) => {
            window.loadURL(applicationConfiguration.url);

            return Promise.resolve(configuration);
        });
    }
}
