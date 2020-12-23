export interface IGlobalShortcut {
    /**
     * Whether this application has registered the `accelerator`.
     * @param accelerator Accelerator
     */
    isRegistered(accelerator: string): Promise<boolean>;

    /**
     * Registers a global shortcut of `accelerator`.
     *
     * If the accelerator is already registered by another application outside of the
     * desktop, the listener will sliently fail. This is the behavior of operating systems.
     * @param accelerator Accelerator
     * @param listener Called when the `accelerator` is pressed by the user.
     */
    register(accelerator: string, listener: () => void): void;

    /**
     * Unregisters the global shortcut of `accelerator`.
     * @param accelerator Accelerator
     * @param listener The listener to remove.
     */
    unregister(accelerator: string, listener: () => void): void;

    /**
     * Unregisters all global shortcuts for this application.
     */
    unregisterAll(): void;
}
