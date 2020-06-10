import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IStorageClient } from "./iStorageClient";

export interface IStorageProvisioner {
    canProvision(configuration: IConfiguration): boolean;

    provision(configuration: IConfiguration): Promise<IStorageClient>;
}
