import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IRegistryService } from "./iRegistryService";

export class ConfigurationRegistryService implements IRegistryService {
    private readonly keyFunc: (configuration: IConfiguration) => string;
    private readonly registry = new Map<string, IConfiguration>();

    public constructor(keyFunc: (configuration: IConfiguration) => string) {
        this.keyFunc = keyFunc;
    }

    public includes(configuration: IConfiguration) {
        const key = this.keyFunc(configuration);

        return this.registry.has(key);
    }

    public getRegistry() {
        const registry = Array.from(this.registry.values());

        return Promise.resolve(registry);
    }

    public register(configuration: IConfiguration) {
        const key = this.keyFunc(configuration);

        this.registry.set(key, configuration);

        return Promise.resolve();
    }

    public unregister(configuration: IConfiguration) {
        const key = this.keyFunc(configuration);

        if (this.registry.has(key)) {
            this.registry.delete(key);

            return Promise.resolve();
        }

        const { name, namespace } = configuration.metadata;

        const message = `A configuration object of kind: ${configuration.kind} ${namespace}/${name} was not found.`;

        const error = new Error(message);

        return Promise.reject(error);
    }
}
