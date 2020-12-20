import { WellKnownConfigurationKind, IConfiguration, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class ServiceConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: WellKnownConfigurationKind) => {
        return kind === WellKnownConfigurationKind.Service;
    };

    public generate = ({ description = "Service", name }: IGeneratorOptions): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: WellKnownConfigurationKind.Service,
            metadata: {
                name,
                description,
                namespace: WellKnownNamespace.default,
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
