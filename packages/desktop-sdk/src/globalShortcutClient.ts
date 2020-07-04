import { IDesktop } from "./iDesktop";
import { IGlobalShortcut } from "./iGlobalShortcut";

export class GlobalShortcutClient implements IGlobalShortcut {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public isRegistered(accelerator: string) {
        return this.desktop.api.globalShortcut.isRegistered(accelerator);
    }

    public register(accelerator: string, listener: () => void) {
        return this.desktop.api.globalShortcut.register(accelerator, listener);
    }

    public unregister(accelerator: string, listener: () => void) {
        return this.desktop.api.globalShortcut.unregister(accelerator, listener);
    }

    public unregisterAll() {
        return this.desktop.api.globalShortcut.unregisterAll();
    }
}
