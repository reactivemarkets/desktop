import { IConfiguration } from "@reactivemarkets/desktop-types";
import { StorageInstance } from "./storageInstance";

export interface IStorageService {
    /**
     * Get all storage clients.
     */
    all(): StorageInstance[];

    /**
     * Get the storage client for the namespace
     * @param namespace the application namespace
     */
    from(identifier: string | IConfiguration): StorageInstance | undefined;

    /**
     * Register a new storage client.
     * @param namespace the application namespace
     * @param storageClient `IStorageClient`
     */
    create(configuration: IConfiguration): Promise<StorageInstance>;
}
