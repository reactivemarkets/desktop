import { ConfigurationKind, IConfiguration, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class ApplicationConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.Application;
    };

    public generate = async (_: ConfigurationKind, name: string, url: string): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: ConfigurationKind.Application,
            metadata: {
                name,
                description: `description of ${name}`,
                namespace: WellKnownNamespaces.default,
            },
            spec: {
                url,
                window: {
                    height: 600,
                    width: 800,
                },
            },
        });
    };
}
