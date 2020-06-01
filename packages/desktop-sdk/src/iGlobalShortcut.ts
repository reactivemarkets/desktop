export interface IGlobalShortcut {
    isRegistered(accelerator: string): Promise<boolean>;
    register(accelerator: string, listener: () => void): void;
    unregister(accelerator: string, listener: () => void): void;
    unregisterAll(): void;
}
