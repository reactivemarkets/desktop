import { ConfigurationKind, IConfiguration, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class ServiceConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.Service;
    };

    public generate = async ({ name }: IGeneratorOptions): Promise<IConfiguration> => {
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
