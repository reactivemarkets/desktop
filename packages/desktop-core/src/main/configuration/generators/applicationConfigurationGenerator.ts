import { ConfigurationKind } from "../configurationKind";
import { IConfiguration } from "../iConfiguration";

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
