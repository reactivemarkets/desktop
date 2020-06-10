import { IEnvironmentParameters } from "./iEnvironmentParameters";

export interface IExternalSpecification {
    readonly arguments?: string[];
    readonly env?: IEnvironmentParameters;
    readonly executable: string;
}
