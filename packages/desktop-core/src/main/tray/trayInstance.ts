import { IConfiguration } from "@reactivemarkets/desktop-types";
import { Tray } from "electron";

export class TrayInstance {
    #configuration: IConfiguration;
    #instance: Tray;
    #onDestroy: () => void;

    public constructor(configuration: IConfiguration, instance: Tray, onDestroy: () => void) {
        this.#configuration = configuration;
        this.#instance = instance;
        this.#onDestroy = onDestroy;
    }

    public get configuration() {
        return this.#configuration;
    }

    public get instance() {
        return this.#instance;
    }

    public destroy() {
        this.#instance.destroy();
        this.#onDestroy();
    }
}
