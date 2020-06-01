import { IEnvironmentOptionsConfiguration } from "./iEnvironmentOptionsConfiguration";

export interface IExternalConfiguration {
    readonly arguments?: string[];
    readonly env?: IEnvironmentOptionsConfiguration;
    readonly executable: string;
}
