export interface IGlobalShortcut {
    isRegistered(accelerator: string): Promise<boolean>;
    register(accelerator: string, listener: () => void): void;
    unRegister(accelerator: string, listener: () => void): void;
    unRegisterAll(): void;
}
