/* eslint-disable @typescript-eslint/ban-ts-comment */
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
        const boundsEvents = ["move", "resize"].map((event) => {
            return fromEventPattern(
                // @ts-ignore
                (h) => this.#instance.addListener(event, h),
                // @ts-ignore
                (h) => this.#instance.removeListener(event, h),
            );
        });

        const boundsChanged = merge(...boundsEvents)
            .pipe(debounceTime(this.#delay))
            .subscribe({
                next: this.onBoundsChange,
            });

        const stateEvents = ["maximize", "unmaximize", "minimize", "enter-full-screen", "leave-full-screen"].map(
            (event) => {
                return fromEventPattern(
                    // @ts-ignore
                    (h) => this.#instance.addListener(event, h),
                    // @ts-ignore
                    (h) => this.#instance.removeListener(event, h),
                );
            },
        );

        const stateChanged = merge(...stateEvents)
            .pipe(debounceTime(this.#delay))
            .subscribe({
                next: this.onStateChange,
            });

        this.#instance.once("closed", () => {
            this.onClosed();
            boundsChanged.unsubscribe();
            stateChanged.unsubscribe();
        });
    };

    private readonly onBoundsChange = () => {
        const bounds = this.#instance.getNormalBounds();

        this.#configuration = updateStatus(this.#configuration, {
            ...bounds,
        });

        this.emit("status-update", this.#configuration);
    };

    private readonly onClosed = () => {
        this.#configuration = updateStatus(this.#configuration, {
            state: ApplicationState.closed,
        });

        this.emit("status-update", this.#configuration);
    };

    private readonly onStateChange = () => {
        const isFullScreen = this.#instance.isFullScreen();
        const isMaximized = this.#instance.isMaximized();
        const isMinimized = this.#instance.isMinimized();

        this.#configuration = updateStatus(this.#configuration, {
            isFullScreen,
            isMaximized,
            isMinimized,
        });

        this.emit("status-update", this.#configuration);
    };
}
