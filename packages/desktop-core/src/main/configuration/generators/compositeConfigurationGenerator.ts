import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { IGeneratorOptions } from "./iGeneratorOptions";

export class CompositeConfigurationGenerator implements IConfigurationGenerator {
    private readonly generators: IConfigurationGenerator[];

    public constructor(...generators: IConfigurationGenerator[]) {
        this.generators = generators;
    }

    public canGenerate(kind: ConfigurationKind) {
        return this.generators.some((g) => g.canGenerate(kind));
    }

    public async generate(options: IGeneratorOptions): Promise<IConfiguration> {
        const { kind } = options;
        const generator = this.generators.find((g) => g.canGenerate(kind));
        if (generator === undefined) {
            const error = new Error(`no generator for ${kind}`);

            return Promise.reject(error);
        }

        return generator.generate(options);
    }
}
