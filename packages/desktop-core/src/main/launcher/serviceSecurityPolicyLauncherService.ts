import {
    IConfiguration,
    WellKnownConfigurationKind,
    IServiceSecurityPolicySpecification,
    IServiceSpecification,
} from "@reactivemarkets/desktop-types";
import { ILogger } from "../logging";
import { IRegistryService } from "../registry/iRegistryService";
import { ILauncherService } from "./iLauncherService";

export class ServiceSecurityPolicyLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly launcherService: ILauncherService;
    private readonly registryService: IRegistryService;

    public constructor(logger: ILogger, launcherService: ILauncherService, registryService: IRegistryService) {
        this.logger = logger;
        this.launcherService = launcherService;
        this.registryService = registryService;
    }

    public canLaunch = ({ kind }: IConfiguration) => {
        return kind === WellKnownConfigurationKind.Service;
    };

    public async launch(configuration: IConfiguration) {
        const registry = await this.registryService.getRegistry();

        const policy = registry.find(({ kind }) => kind === WellKnownConfigurationKind.ServiceSecurityPolicy);
        if (policy === undefined) {
            return this.launcherService.launch(configuration);
        }

        const { name, namespace } = configuration.metadata;

        const { main } = configuration.spec as IServiceSpecification;

        const { allowedPaths, blockedPaths } = policy.spec as IServiceSecurityPolicySpecification;

        const blocked = blockedPaths?.some((path) => {
            const regExp = new RegExp(path);

            return regExp.test(main);
        });

        if (blocked) {
            const message = `${namespace}/${name} - ${main} matches a blocked service, won't launch.`;

            throw new Error(message);
        }

        const allowed = allowedPaths?.some((path) => {
            const regExp = new RegExp(path);

            return regExp.test(main);
        });

        if (allowed === undefined || allowed) {
            this.logger.verbose(`${namespace}/${name} passes allowed domains.`);

            return this.launcherService.launch(configuration);
        }

        const message = `A service security policy was specified but ${namespace}/${name} - ${main} doesn't pass the allowed or blocked lists.`;

        throw new Error(message);
    }
}
