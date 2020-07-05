import { WellKnownConfigurationKind, IConfiguration, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class ExternalConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: WellKnownConfigurationKind) => {
        return kind === WellKnownConfigurationKind.External;
    };

    public generate = ({ name }: IGeneratorOptions): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: WellKnownConfigurationKind.External,
            metadata: {
                name,
                description: `description of ${name}`,
                namespace: WellKnownNamespace.default,
            },
            spec: {
                executable: `${name}.exe`,
            },
        });
    };
}
