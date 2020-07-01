export interface IApplicationSecurityPolicySpecification {
    readonly allowedDomains?: readonly string[];
    readonly blockedDomains?: readonly string[];
}
