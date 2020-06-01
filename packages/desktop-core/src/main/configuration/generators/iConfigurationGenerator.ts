import { ConfigurationKind, IConfiguration } from "@reactivemarkets/desktop-types";

export interface IConfigurationGenerator {
    canGenerate(kind: ConfigurationKind): boolean;
    generate(kind: ConfigurationKind, name: string, url: string): Promise<IConfiguration>;
}
