import { Accelerator } from "electron";

export interface IGlobalShortcutService {
    /**
     * Registers a global shortcut for the application.
     * @param accelerator Accelerator
     * @param listener Function
     */
    register(accelerator: Accelerator, listener: () => void): void;

    /**
     * Unregisters a previous listener to a global shortcut.
     * @param accelerator Accelerator
     * @param listener Function
     */
    unregister(accelerator: Accelerator, listener: () => void): void;

    /**
     * Unregister all global shortcuts.
     */
    unregisterAll(): void;
}
