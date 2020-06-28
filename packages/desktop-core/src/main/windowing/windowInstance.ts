import { ApplicationState, IConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";
import { fromEventPattern, merge } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { TypedEmitter } from "tiny-typed-emitter";
import { updateStatus } from "./configurationExtensions";

interface IWindowInstanceEvents {
    "status-update": (configuration: IConfiguration) => void;
}

export class WindowInstance extends TypedEmitter<IWindowInstanceEvents> {
    #delay = 500;
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
        const move = fromEventPattern(
            (h) => this.#instance.addListener("move", h),
            (h) => this.#instance.removeListener("move", h),
        );
        const resize = fromEventPattern(
            (h) => this.#instance.addListener("resize", h),
            (h) => this.#instance.removeListener("resize", h),
        );
        const boundsChanged = merge(move, resize)
            .pipe(debounceTime(this.#delay))
            .subscribe({
                next: this.onBoundsChange,
            });

        this.#instance.once("closed", () => {
            this.#configuration = updateStatus(this.#configuration, {
                state: ApplicationState.closed,
            });
            this.emit("status-update", this.#configuration);
            boundsChanged.unsubscribe();
        });
    };

    private readonly onBoundsChange = () => {
        const bounds = this.#instance.getNormalBounds();

        this.#configuration = updateStatus(this.#configuration, {
            ...bounds,
        });

        this.emit("status-update", this.#configuration);
    };
}
