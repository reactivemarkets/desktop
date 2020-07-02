export interface IUpdatePolicySpecification {
    readonly allowDowngrade?: boolean;
    readonly allowPrerelease?: boolean;
    readonly channel?: string;
    readonly checkForUpdates?: boolean;
}
