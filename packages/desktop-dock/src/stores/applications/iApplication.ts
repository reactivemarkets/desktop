import { IConfiguration } from "@reactivemarkets/desktop-sdk";

export interface IApplication {
    readonly category?: string;
    readonly configuration: IConfiguration;
    readonly description?: string;
    readonly display?: string;
    readonly icon?: string;
    readonly key: string;
    readonly name: string;
}
