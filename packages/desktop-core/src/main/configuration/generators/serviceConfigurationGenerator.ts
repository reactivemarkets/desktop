import { ConfigurationKind, IConfiguration, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class ServiceConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.Service;
    };

    public generate = async (_: ConfigurationKind, name: string): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: ConfigurationKind.Service,
            metadata: {
                name,
                description: `description of ${name}`,
                namespace: WellKnownNamespaces.default,
            },
            spec: {
                affinity: "service host",
                main: `${name}.asar`,
                options: {
                    config: "value",
                },
            },
        });
    };
}
