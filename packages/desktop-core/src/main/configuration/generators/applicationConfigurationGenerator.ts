import { WellKnownConfigurationKind, IConfiguration, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class ApplicationConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: WellKnownConfigurationKind) => {
        return kind === WellKnownConfigurationKind.Application;
    };

    public generate = ({ description = "Webpage", name, url }: IGeneratorOptions): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: WellKnownConfigurationKind.Application,
            metadata: {
                name,
                description,
                namespace: WellKnownNamespace.default,
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
