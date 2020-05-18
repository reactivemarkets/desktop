import { ConfigurationKind } from "../configurationKind";
import { IConfiguration } from "../iConfiguration";

import { IConfigurationGenerator } from "./iConfigurationGenerator";

export class CompositeConfigurationGenerator implements IConfigurationGenerator {
    private readonly generators: IConfigurationGenerator[];

    public constructor(...generators: IConfigurationGenerator[]) {
        this.generators = generators;
    }

    public canGenerate(kind: ConfigurationKind) {
        return this.generators.some((g) => g.canGenerate(kind));
    }

    public async generate(kind: ConfigurationKind, name: string, url: string): Promise<IConfiguration> {
        const generator = this.generators.find((g) => g.canGenerate(kind));

        if (generator === undefined) {
            const error = new Error(`no generator for ${kind}`);

            return Promise.reject(error);
        }

        return generator.generate(kind, name, url);
    }
}
