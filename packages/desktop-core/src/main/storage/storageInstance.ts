import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IStorageClient } from "./iStorageClient";

export class StorageInstance {
    #configuration: IConfiguration;
    #instance: IStorageClient;

    public constructor(configuration: IConfiguration, instance: IStorageClient) {
        this.#configuration = configuration;
        this.#instance = instance;
    }

    public get configuration() {
        return this.#configuration;
    }

    public get instance() {
        return this.#instance;
    }
}
