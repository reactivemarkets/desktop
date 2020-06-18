import { ConfigurationKind, IConfiguration, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class ApplicationConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.Application;
    };

    public generate = ({ name, url }: IGeneratorOptions): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: ConfigurationKind.Application,
            metadata: {
                name,
                description: `Website of ${url}`,
                namespace: WellKnownNamespaces.default,
            },
            spec: {
                url: url!,
                window: {
                    height: 600,
                    width: 800,
                },
            },
        });
    };
}
