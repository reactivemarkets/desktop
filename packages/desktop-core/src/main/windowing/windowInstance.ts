import { ApplicationState, IConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { updateStatus } from "./configurationExtensions";

interface IWindowInstanceEvents {
    "status-update": (configuration: IConfiguration) => void;
}

export class WindowInstance extends TypedEmitter<IWindowInstanceEvents> {
    #configuration: IConfiguration;
    #instance: BrowserWindow;

    public constructor(configuration: IConfiguration, instance: BrowserWindow) {
        super();

        this.#configuration = configuration;
        this.#instance = instance;

        this.attachEventHandlers();
    }

    public get configuration() {
        return this.#configuration;
    }

    public get instance() {
        return this.#instance;
    }

    private readonly attachEventHandlers = () => {
        this.#instance.once("closed", () => {
            this.#configuration = updateStatus(this.#configuration, {
                state: ApplicationState.closed,
            });
            this.emit("status-update", this.#configuration);
        });
    };
}
