import { IConfiguration, WellKnownConfigurationKind, WellKnownNamespace } from "@reactivemarkets/desktop-types";
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
        return kind === WellKnownConfigurationKind.Tray;
    }

    public async launch(configuration: IConfiguration): Promise<IConfiguration> {
        const { name, namespace = WellKnownNamespace.default } = configuration.metadata;

        this.logger.verbose(`Configuring tray: ${name} in ${namespace}`);

        const instance = await this.trayService.create(configuration);

        return instance.configuration;
    }
}
