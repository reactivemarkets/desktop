/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDesktopVersions } from "./iDesktopVersions";

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
     * Gets the application version.
     */
    getAppVersion(): Promise<string>;

    /**
     * Versions of chrome, node, v8 etc...
     */
    getVersions(): Promise<IDesktopVersions>;

    /**
     * Quits the application giving all windows time to close.
     */
    quit(): Promise<void>;

    /**
     * Shows the desktop about panel.
     */
    showAboutPanel(): Promise<void>;
}
