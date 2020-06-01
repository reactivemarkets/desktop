import {
    WellKnownNamespaces,
    IConfiguration,
    ConfigurationKind,
    ISessionConfiguration,
} from "@reactivemarkets/desktop-types";
import { ILogger } from "../logging";
import { ISessionService } from "../session";

import { ILauncherService } from "./iLauncherService";

export class SessionConfigurationLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly sessionService: ISessionService;

    public constructor(logger: ILogger, sessionService: ISessionService) {
        this.logger = logger;
        this.sessionService = sessionService;
    }

    public canLaunch = ({ kind }: IConfiguration) => {
        return kind === ConfigurationKind.Session;
    };

    public async launch(configuration: IConfiguration): Promise<IConfiguration> {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const serviceConfiguration = configuration.spec as ISessionConfiguration;

        this.logger.verbose(`Configuring session: ${name} in ${namespace}`);

        await this.sessionService.configure(serviceConfiguration);

        return configuration;
    }
}
