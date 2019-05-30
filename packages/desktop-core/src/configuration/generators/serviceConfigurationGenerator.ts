import { ConfigurationKind } from "../configurationKind";
import { IConfiguration } from "../iConfiguration";
import { ServiceHost } from "../serviceHost";

import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class ServiceConfigurationGenerator implements IConfigurationGenerator {

    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.Service;
    }

    public generate = async (_: ConfigurationKind, name: string, __: string): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: ConfigurationKind.Service,
            metadata: {
                name,
                // tslint:disable-next-line:object-literal-sort-keys
                description: `description of ${name}`,
            },
            spec: {
                affinity: "service host",
                host: ServiceHost.Electron,
                main: `${name}.asar`,
                options: {
                    config: "value",
                },
            },
        });
    }
}
