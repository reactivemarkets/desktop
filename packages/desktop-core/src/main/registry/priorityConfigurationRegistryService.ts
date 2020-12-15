import { IConfiguration } from "@reactivemarkets/desktop-types";
import { from } from "ix/iterable";
import { orderBy, thenBy } from "ix/iterable/operators";

import { configurationKindComparer } from "./configurationKindComparer";
import { IRegistryService } from "./iRegistryService";
import { namespaceComparer } from "./namespaceComparer";

export class PriorityConfigurationRegistryService implements IRegistryService {
    private readonly registryService: IRegistryService;

    public constructor(registryService: IRegistryService) {
        this.registryService = registryService;
    }

    public includes(configuration: IConfiguration) {
        return this.registryService.includes(configuration);
    }

    public async getRegistry() {
        const registry = await this.registryService.getRegistry();

        const sortedRegistry = from(registry).pipe(
            orderBy((item) => item.metadata.namespace, namespaceComparer),
            thenBy((item) => item.kind, configurationKindComparer),
            thenBy((item) => item.metadata.name),
        );

        return Array.from(sortedRegistry);
    }

    public register(configuration: IConfiguration) {
        return this.registryService.register(configuration);
    }

    public unregister(configuration: IConfiguration) {
        return this.registryService.unregister(configuration);
    }
}
