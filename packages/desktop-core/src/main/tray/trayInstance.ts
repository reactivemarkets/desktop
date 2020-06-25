import { IConfiguration } from "@reactivemarkets/desktop-types";
import { Tray } from "electron";

export class TrayInstance {
    #configuration: IConfiguration;
    #instance: Tray;

    public constructor(configuration: IConfiguration, instance: Tray) {
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
