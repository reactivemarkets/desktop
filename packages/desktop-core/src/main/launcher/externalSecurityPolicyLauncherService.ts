import {
    IConfiguration,
    WellKnownConfigurationKind,
    IExternalSecurityPolicySpecification,
    IExternalSpecification,
} from "@reactivemarkets/desktop-types";
import { ILogger } from "../logging";
import { IRegistryService } from "../registry/iRegistryService";
import { ILauncherService } from "./iLauncherService";

export class ExternalSecurityPolicyLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly launcherService: ILauncherService;
    private readonly registryService: IRegistryService;

    public constructor(logger: ILogger, launcherService: ILauncherService, registryService: IRegistryService) {
        this.logger = logger;
        this.launcherService = launcherService;
        this.registryService = registryService;
    }

    public canLaunch = ({ kind }: IConfiguration) => {
        return kind === WellKnownConfigurationKind.External;
    };

    public async launch(configuration: IConfiguration) {
        const registry = await this.registryService.getRegistry();

        const policy = registry.find(({ kind }) => kind === WellKnownConfigurationKind.ExternalSecurityPolicy);
        if (policy === undefined) {
            return this.launcherService.launch(configuration);
        }

        const { name, namespace } = configuration.metadata;

        const { executable } = configuration.spec as IExternalSpecification;

        const { allowedExecutables, blockedExecutables } = policy.spec as IExternalSecurityPolicySpecification;

        const blocked = blockedExecutables?.some((exe) => {
            const regExp = new RegExp(exe);

            return regExp.test(executable);
        });

        if (blocked) {
            const message = `${namespace}/${name} - ${executable} matches a blocked executable, won't launch.`;

            throw new Error(message);
        }

        const allowed = allowedExecutables?.some((exe) => {
            const regExp = new RegExp(exe);

            return regExp.test(executable);
        });

        if (allowed === undefined || allowed) {
            this.logger.verbose(`${namespace}/${name} passes allowed domains.`);

            return this.launcherService.launch(configuration);
        }

        const message = `An external security policy was specified but ${namespace}/${name} - ${executable} doesn't pass the allowed or blocked lists.`;

        throw new Error(message);
    }
}
