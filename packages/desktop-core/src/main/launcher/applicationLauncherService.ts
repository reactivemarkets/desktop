import {
    WellKnownNamespaces,
    IConfiguration,
    ConfigurationKind,
    IApplicationConfiguration,
} from "@reactivemarkets/desktop-types";

import { ILogger } from "../logging";
import { IWindowService } from "../windowing";

import { ILauncherService } from "./iLauncherService";
import { normalizeUrl } from "./normalize";

export class ApplicationLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly windowService: IWindowService;

    public constructor(logger: ILogger, windowService: IWindowService) {
        this.logger = logger;
        this.windowService = windowService;
    }

    public canLaunch = ({ kind }: IConfiguration) => {
        return kind === ConfigurationKind.Application;
    };

    public async launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const { url, window } = configuration.spec as IApplicationConfiguration;

        const fileOrUrl = normalizeUrl(url);

        this.logger.verbose(`launching ${namespace}/${name} from ${fileOrUrl}`);

        const browserWindow = await this.windowService.createWindow(window);

        await browserWindow.loadURL(fileOrUrl);

        return configuration;
    }
}
