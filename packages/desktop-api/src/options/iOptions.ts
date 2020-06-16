export interface IOptions {
    readonly allowedOrigins: readonly string[];
    readonly blockedOrigins: readonly string[];
    readonly cert?: string;
    readonly key?: string;
    readonly host: string;
    readonly port: number;
}
