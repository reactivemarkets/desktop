import { StorageState } from "./storageState";

export interface IStorageStatus {
    readonly message?: string;
    readonly state: StorageState;
    readonly startTime?: Date;
}
