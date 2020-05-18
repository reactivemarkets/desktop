import { IterableX } from "ix/iterable";
import { orderBy, thenBy } from "ix/iterable/pipe/index";

import { IConfiguration } from "../configuration";

import { configurationKindComparer } from "./configurationKindComparer";
import { IRegistryService } from "./iRegistryService";
import { namespaceComparer } from "./namespaceComparer";

export class PriorityConfigurationRegistryService implements IRegistryService {
    private readonly registryService: IRegistryService;

    public constructor(registryService: IRegistryService) {
        this.registryService = registryService;
    }

    public async getRegistry(): Promise<IConfiguration[]> {
        const registry = await this.registryService.getRegistry();

        const sortedRegistry = IterableX.from(registry).pipe(
            orderBy((item) => item.metadata.namespace, namespaceComparer),
            thenBy((item) => item.kind, configurationKindComparer),
            thenBy((item) => item.metadata.name),
        );

        return Array.from(sortedRegistry);
    }

    public async registerConfig(path: string) {
        return this.registryService.registerConfig(path);
    }

    public async registerUrl(url: string) {
        return this.registryService.registerUrl(url);
    }
}
