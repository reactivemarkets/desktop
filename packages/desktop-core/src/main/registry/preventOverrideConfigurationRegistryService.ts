import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IRegistryService } from "./iRegistryService";

export class PreventOverrideConfigurationRegistryService implements IRegistryService {
    private readonly nonOverridingKinds: string[];
    private readonly registryService: IRegistryService;

    public constructor(registryService: IRegistryService, ...nonOverridingKinds: string[]) {
        this.registryService = registryService;
        this.nonOverridingKinds = nonOverridingKinds;
    }

    public includes(configuration: IConfiguration) {
        return this.registryService.includes(configuration);
    }

    public getRegistry() {
        return this.registryService.getRegistry();
    }

    public register(configuration: IConfiguration) {
        const { kind } = configuration;

        if (this.nonOverridingKinds.includes(kind) && this.registryService.includes(configuration)) {
            const { name, namespace } = configuration.metadata;

            const message = `${kind} already exists and modification is not supported. ${namespace}/${name} cannot override.`;

            const error = new Error(message);

            return Promise.reject(error);
        }

        return this.registryService.register(configuration);
    }

    public unregister(configuration: IConfiguration) {
        return this.registryService.unregister(configuration);
    }
}
