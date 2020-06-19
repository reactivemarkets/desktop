import { IConfiguration, ConfigurationKind, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { ITrayService } from "../tray";
import { ILogger } from "../logging";
import { ILauncherService } from "./iLauncherService";

export class TrayLauncherService implements ILauncherService {
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

        this.logger.verbose(`Configuring tray: ${name} in ${namespace}`);

        await this.trayService.create(configuration);

        return configuration;
    }
}
