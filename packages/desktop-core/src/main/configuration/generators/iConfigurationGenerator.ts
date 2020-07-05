import { WellKnownConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";
import { IGeneratorOptions } from "./iGeneratorOptions";

export interface IConfigurationGenerator {
    canGenerate(kind: WellKnownConfigurationKind): boolean;
    generate(options: IGeneratorOptions): Promise<IConfiguration>;
}
