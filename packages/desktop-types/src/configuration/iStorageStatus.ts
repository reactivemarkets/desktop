import { StorageState } from "./storageState";

export interface IStorageStatus {
    /**
     * A human readable message.
     */
    readonly message?: string;
    /**
     * Current state of the storage.
     */
    readonly state: StorageState;
    /**
     * The start time of the storage instance.
     */
    readonly startTime?: Date;
}
