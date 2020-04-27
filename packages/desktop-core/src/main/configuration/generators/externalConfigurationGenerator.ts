import { ConfigurationKind } from "../configurationKind";
import { IConfiguration } from "../iConfiguration";

import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class ExternalConfigurationGenerator implements IConfigurationGenerator {
    public canGenerate = (kind: ConfigurationKind) => {
        return kind === ConfigurationKind.External;
    }

    public generate = async (_: ConfigurationKind, name: string, __: string): Promise<IConfiguration> => {
        return Promise.resolve({
            kind: ConfigurationKind.External,
            metadata: {
                name,
                // tslint:disable-next-line:object-literal-sort-keys
                description: `description of ${name}`,
            },
            spec: {
                executable: `${name}.exe`,
            },
        });
    }
}
