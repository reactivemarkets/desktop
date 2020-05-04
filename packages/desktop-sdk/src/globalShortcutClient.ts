import { IDesktop } from "./iDesktop";
import { IGlobalShortcut } from "./iGlobalShortcut";

export class GlobalShortcutClient implements IGlobalShortcut {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public isRegistered(accelerator: string): Promise<boolean> {
        return this.desktop.api.globalShortcut.isRegistered(accelerator);
    }

    public register(accelerator: string, listener: () => void) {
        this.desktop.api.globalShortcut.register(accelerator, listener);
    }

    public unRegister(accelerator: string, listener: () => void) {
        this.desktop.api.globalShortcut.unRegister(accelerator, listener);
    }

    public unRegisterAll() {
        this.desktop.api.globalShortcut.unRegisterAll();
    }
}
