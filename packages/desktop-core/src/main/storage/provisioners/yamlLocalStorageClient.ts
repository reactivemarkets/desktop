import Store from "electron-store";
import * as yaml from "js-yaml";
import { IStorageClient } from "../iStorageClient";

export class YamlLocalStorageClient implements IStorageClient {
    private readonly store: Store;

    public constructor(name: string) {
        this.store = new Store({
            clearInvalidConfig: false,
            name,
            fileExtension: "yaml",
            serialize: yaml.safeDump,
            deserialize: yaml.safeLoad,
        });
    }

    public clear(): Promise<void> {
        this.store.clear();

        return Promise.resolve();
    }

    public delete(key: string): Promise<boolean> {
        this.store.delete(key);

        return Promise.resolve(true);
    }

    public get<T>(key: string, defaultValue: T): Promise<T> {
        const value = this.store.get(key, defaultValue);

        return Promise.resolve(value);
    }

    public has(key: string): Promise<boolean> {
        const has = this.store.has(key);

        return Promise.resolve(has);
    }

    public set<T>(key: string, value: T): Promise<void> {
        this.store.set(key, value);

        return Promise.resolve();
    }
}
