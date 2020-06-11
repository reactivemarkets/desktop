export interface IStorageClient {
    clear(): Promise<void>;
    delete(key: string): Promise<boolean>;
    get<T>(key: string, defaultValue: T): Promise<T>;
    has(key: string): Promise<boolean>;
    set<T>(key: string, value: T): Promise<void>;
}
