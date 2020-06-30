import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IStorageClient } from "./iStorageClient";

export interface IStorageProvisioner {
    /**
     * Check whether a storage client can be created from the given configuration.
     * @param configuration the storage configuration.
     */
    canProvision(configuration: IConfiguration): boolean;

    /**
     * Provision a new storage client from the given configuration.
     * @param configuration the storage configuration.
     */
    provision(configuration: IConfiguration): Promise<IStorageClient>;
}
