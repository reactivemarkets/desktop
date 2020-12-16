import { IConfiguration } from "@reactivemarkets/desktop-sdk";

export interface IApplication {
    readonly category: string;
    readonly configuration: IConfiguration;
    readonly description?: string;
    readonly icon?: string;
    readonly key: string;
    readonly launch: () => Promise<IConfiguration>;
    readonly name: string;
}
