import { WellKnownNamespaces, IConfiguration } from "@reactivemarkets/desktop-types";
import { IRegistryService } from "./iRegistryService";

export class ConfigurationRegistryService implements IRegistryService {
    private readonly registry = new Map<string, IConfiguration>();

    public getRegistry() {
        return Promise.resolve(Array.from(this.registry.values()));
    }

    public register(configuration: IConfiguration) {
        const { kind } = configuration;

        const { namespace = WellKnownNamespaces.default, name } = configuration.metadata;

        const key = `${kind}/${namespace}/${name}`;

        this.registry.set(key, configuration);

        return Promise.resolve();
    }

    public unregister(configuration: IConfiguration) {
        const { kind } = configuration;

        const { namespace = WellKnownNamespaces.default, name } = configuration.metadata;

        const key = `${kind}/${namespace}/${name}`;

        if (this.registry.has(key)) {
            this.registry.delete(key);

            return Promise.resolve();
        }

        const message = `A configuration object of kind: ${kind} in namespace: ${namespace} called: ${name} was not found.`;

        const error = new Error(message);

        return Promise.reject(error);
    }
}
