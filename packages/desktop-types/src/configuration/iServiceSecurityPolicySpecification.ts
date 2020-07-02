export interface IServiceSecurityPolicySpecification {
    readonly allowedPaths?: readonly string[];
    readonly blockedPaths?: readonly string[];
}
