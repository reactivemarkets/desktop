export interface IDesktop {
    readonly api: any;

    /**
     * A property that returns true if the application is running
     * in the desktop host.
     */
    readonly isHostedInDesktop: boolean;

    /**
     * Quits the application giving all windows time to close.
     */
    quit(): Promise<void>;

    /**
     * Shows the desktop about panel.
     */
    showAboutPanel(): Promise<void>;
}
