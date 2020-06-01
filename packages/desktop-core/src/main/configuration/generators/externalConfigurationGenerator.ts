import { ConfigurationKind, IConfiguration, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class ExternalConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.External;
    };

    public generate = async (_: ConfigurationKind, name: string): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: ConfigurationKind.External,
            metadata: {
                name,
                description: `description of ${name}`,
                namespace: WellKnownNamespaces.default,
            },
            spec: {
                executable: `${name}.exe`,
            },
        });
    };
}
