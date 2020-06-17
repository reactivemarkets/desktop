import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { IGeneratorOptions } from "./iGeneratorOptions";

export interface IConfigurationGenerator {
    canGenerate(kind: ConfigurationKind): boolean;
    generate(options: IGeneratorOptions): Promise<IConfiguration>;
}
