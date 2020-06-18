import { IConfiguration, ConfigurationKind, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { ILauncherService } from "./iLauncherService";
import { ILogger } from "../logging";
import { IStorageService } from "../storage";

export class StorageLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly storageService: IStorageService;

    public constructor(logger: ILogger, storageService: IStorageService) {
        this.logger = logger;
        this.storageService = storageService;
    }

    public canLaunch({ kind }: IConfiguration) {
        return kind === ConfigurationKind.Storage;
    }

    public async launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        this.logger.verbose(`Configuring storage provisioner: ${name} in ${namespace}`);

        const instance = await this.storageService.create(configuration);

        return instance.configuration;
    }
}
