import { IStorageClient } from "./iStorageClient";

export class TransientStorageClient implements IStorageClient {
    private readonly store = new Map<string, unknown>();

    public clear(): Promise<void> {
        this.store.clear();

        return Promise.resolve();
    }

    public delete(key: string): Promise<boolean> {
        const deleted = this.store.delete(key);

        return Promise.resolve(deleted);
    }

    public get<T>(key: string, defaultValue: T): Promise<T> {
        if (!this.store.has(key)) {
            return Promise.resolve(defaultValue);
        }

        const value = this.store.get(key);

        return Promise.resolve(value as T);
    }

    public has(key: string): Promise<boolean> {
        const value = this.store.has(key);

        return Promise.resolve(value);
    }

    public set<T>(key: string, value: T): Promise<void> {
        this.store.set(key, value);

        return Promise.resolve();
    }
}
