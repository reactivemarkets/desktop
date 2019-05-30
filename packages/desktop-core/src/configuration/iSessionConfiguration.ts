export interface ISessionConfiguration {
    readonly downloadPath?: string;
    readonly ntlmDomains?: string[];
    readonly pacScript?: string;
    readonly proxyBypassRules?: string;
    readonly proxyRules?: string;
    readonly userAgent?: string;
}
