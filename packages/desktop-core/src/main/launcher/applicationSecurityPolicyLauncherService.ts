import {
    IConfiguration,
    WellKnownConfigurationKind,
    IApplicationSpecification,
    IApplicationSecurityPolicySpecification,
} from "@reactivemarkets/desktop-types";
import { ILogger } from "../logging";
import { IRegistryService } from "../registry/iRegistryService";
import { ILauncherService } from "./iLauncherService";

export class ApplicationSecurityPolicyLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly launcherService: ILauncherService;
    private readonly registryService: IRegistryService;

    public constructor(logger: ILogger, launcherService: ILauncherService, registryService: IRegistryService) {
        this.logger = logger;
        this.launcherService = launcherService;
        this.registryService = registryService;
    }

    public canLaunch = ({ kind }: IConfiguration) => {
        return kind === WellKnownConfigurationKind.Application;
    };

    public async launch(configuration: IConfiguration) {
        const registry = await this.registryService.getRegistry();

        const policy = registry.find(({ kind }) => kind === WellKnownConfigurationKind.ApplicationSecurityPolicy);
        if (policy === undefined) {
            return this.launcherService.launch(configuration);
        }

        const { name, namespace } = configuration.metadata;

        const { url } = configuration.spec as IApplicationSpecification;

        const { allowedDomains, blockedDomains } = policy.spec as IApplicationSecurityPolicySpecification;

        const blocked = blockedDomains?.some((domain) => {
            const regExp = new RegExp(domain);

            return regExp.test(url);
        });

        if (blocked) {
            const message = `${namespace}/${name} - ${url} matches a blocked domain, won't launch.`;

            throw new Error(message);
        }

        const allowed = allowedDomains?.some((domain) => {
            const regExp = new RegExp(domain);

            return regExp.test(url);
        });

        if (allowed === undefined || allowed) {
            this.logger.verbose(`${namespace}/${name} passes allowed domains.`);

            return this.launcherService.launch(configuration);
        }

        const message = `An application security policy was specified but ${namespace}/${name} - ${url} doesn't pass the allowed or blocked lists.`;

        throw new Error(message);
    }
}
