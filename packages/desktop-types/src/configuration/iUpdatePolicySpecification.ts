import { IUpdateParameters } from "./iUpdateParameters";

export interface IUpdatePolicySpecification {
    readonly allowDowngrade?: boolean;
    readonly allowPrerelease?: boolean;
    readonly channel?: string;
    readonly checkForUpdates?: boolean;
    readonly parameters?: IUpdateParameters;
    readonly provider?: "generic" | "github" | "s3";
}
