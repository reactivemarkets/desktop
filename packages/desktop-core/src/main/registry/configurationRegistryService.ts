import { ConfigurationKind, IConfiguration, WellKnownNamespaces } from "../configuration";
import { IConfigurationGenerator } from "../configuration/generators/iConfigurationGenerator";

import { IConfigurationLoader } from "../configuration/loaders/iConfigurationLoader";
import { IRegistryService } from "./iRegistryService";

export class ConfigurationRegistryService implements IRegistryService {
    private readonly generator: IConfigurationGenerator;
    private readonly loader: IConfigurationLoader<IConfiguration>;
    private readonly registry = new Map<string, IConfiguration>();

    public constructor(loader: IConfigurationLoader<IConfiguration>,
                       generator: IConfigurationGenerator) {
        this.loader = loader;
        this.generator = generator;
    }

    public async getRegistry() {
        return Promise.resolve(Array.from(this.registry.values()));
    }

    public async registerConfig(path: string) {
        return this
            .loader
            .load(path)
            .then(async (configurationArray) => {
                const promises = configurationArray.map(async (configuration) => {
                    return this.registerConfiguration(configuration);
                });

                await Promise.all(promises);
            });
    }

    public async registerUrl(url: string) {
        return this
            .generator
            .generate(ConfigurationKind.Application, url, url)
            .then(async (configuration) => {
                return this.registerConfiguration(configuration);
            });
    }

    private async registerConfiguration(configuration: IConfiguration) {

        const { kind } = configuration;

        const { namespace = WellKnownNamespaces.default, name } = configuration.metadata;

        const key = `${kind}/${namespace}/${name}`;

        if (this.registry.has(key)) {

            const message = `A configuration object of kind: ${kind} in namespace: ${namespace} called: ${name} is already registered.`;

            const error = new Error(message);

            return Promise.reject(error);
        }

        this.registry.set(key, configuration);

        return Promise.resolve();
    }
}
