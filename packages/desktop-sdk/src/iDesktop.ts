/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDesktopVersions } from "./iDesktopVersions";
import { SystemEvents } from "./systemEvents";

export interface IDesktop {
    /**
     * The underlying raw api object.
     */
    readonly api: any;

    /**
     * A property that returns true if the application is running
     * in the desktop host.
     */
    readonly isHostedInDesktop: boolean;

    /**
     * Gets the application name.
     */
    getAppName(): Promise<string>;

    /**
     * Gets the application version.
     */
    getAppVersion(): Promise<string>;

    /**
     * Versions of chrome, node, v8 etc...
     */
    getVersions(): Promise<IDesktopVersions>;

    /**
     * Remove listener from the @see SystemEvents
     * @param event `SystemEvents`
     * @param listener
     */
    off(event: SystemEvents, listener: () => void): void;

    /**
     * Listen to @see SystemEvents
     * @param event `SystemEvents`
     * @param listener
     */
    on(event: SystemEvents, listener: () => void): void;

    /**
     * Quits the application giving all windows time to close.
     */
    quit(): Promise<void>;

    /**
     * Shows the desktop about panel.
     */
    showAboutPanel(): Promise<void>;
}
