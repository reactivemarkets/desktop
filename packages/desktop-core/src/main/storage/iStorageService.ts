import { IConfiguration } from "@reactivemarkets/desktop-types";
import { StorageInstance } from "./storageInstance";

export interface IStorageService {
    /**
     * Get all storage instances.
     */
    all(): readonly StorageInstance[];

    /**
     * Get the storage instance for the given identifier
     * @param identifier The uid or `IConfiguration`
     */
    from(identifier: string | IConfiguration): StorageInstance | undefined;

    /**
     * Get the storage instance for the given namespace.
     * @param namespace The namespace
     */
    fromNamespace(namespace: string): StorageInstance | undefined;

    /**
     * Create a new `StorageInstance` from the given `configuration`.
     * @param configuration The storage configuration
     */
    create(configuration: IConfiguration): Promise<StorageInstance>;
}
