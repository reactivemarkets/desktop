import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IRegistry {
    listApplications(namespace?: string): Promise<IConfiguration[]>;
    register(configuration: IConfiguration): Promise<void>;
    unregister(configuration: IConfiguration): Promise<void>;
}
