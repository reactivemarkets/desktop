import { IConfiguration } from "@reactivemarkets/desktop-sdk";

export interface IApplication {
    readonly configuration: IConfiguration;
    readonly key: string;
    readonly description?: string;
    readonly name: string;
    readonly namespace: string;
}
