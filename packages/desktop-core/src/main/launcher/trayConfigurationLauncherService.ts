import {
    IConfiguration,
    ConfigurationKind,
    WellKnownNamespaces,
    ITraySpecification,
} from "@reactivemarkets/desktop-types";
import { ITrayService } from "../tray";
import { ILogger } from "../logging";
import { ILauncherService } from "./iLauncherService";

export class TrayConfigurationLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly trayService: ITrayService;

    public constructor(logger: ILogger, trayService: ITrayService) {
        this.logger = logger;
        this.trayService = trayService;
    }

    public canLaunch({ kind }: IConfiguration) {
        return kind === ConfigurationKind.Tray;
    }

    public async launch(configuration: IConfiguration): Promise<IConfiguration> {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const trayConfiguration = (configuration.spec ?? {}) as ITraySpecification;

        this.logger.verbose(`Configuring tray: ${name} in ${namespace}`);

        await this.trayService.configure(trayConfiguration);

        return configuration;
    }
}
