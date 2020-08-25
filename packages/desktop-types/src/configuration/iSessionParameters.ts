export interface ISessionParameters {
    readonly downloadPath?: string;
    readonly ntlmDomains?: string[];
    readonly pacScript?: string;
    /**
     * A list of rules indicating which URLs should bypass the proxy settings.
     */
    readonly proxyBypassRules?: string[];
    /**
     * Rules indicating which proxies to use.
     */
    readonly proxyRules?: string;
    /**
     * Overrides the userAgent.
     */
    readonly userAgent?: string;
}
