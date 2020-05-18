import { ConfigurationKind } from "../configurationKind";
import { IConfiguration } from "../iConfiguration";

export interface IConfigurationGenerator {
    canGenerate(kind: ConfigurationKind): boolean;
    generate(kind: ConfigurationKind, name: string, url: string): Promise<IConfiguration>;
}
