import { IDesktop } from "./iDesktop";
import { IDesktopWindow } from "./iDesktopWindow";
import { IRectangle } from "./Rectangle";
import { WindowEvents } from "./windowEvents";

export class DesktopWindow implements IDesktopWindow {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public blur(): Promise<void> {
        return this.desktop.api.window.current.blur();
    }

    public center(): Promise<void> {
        return this.desktop.api.window.current.center();
    }

    public close(): Promise<void> {
        return this.desktop.api.window.current.close();
    }

    public flashFrame(flash: boolean): Promise<void> {
        return this.desktop.api.window.current.flashFrame(flash);
    }

    public focus(): Promise<void> {
        return this.desktop.api.window.current.focus();
    }

    public getBounds(): Promise<IRectangle> {
        return this.desktop.api.window.current.getBounds();
    }

    public getMinimumSize(): Promise<number[]> {
        return this.desktop.api.window.current.getMinimumSize();
    }

    public hide(): Promise<void> {
        return this.desktop.api.window.current.hide();
    }

    public isAlwaysOnTop(): Promise<boolean> {
        return this.desktop.api.window.current.isAlwaysOnTop();
    }

    public isCloseable(): Promise<boolean> {
        return this.desktop.api.window.current.isCloseable();
    }

    public isEnabled(): Promise<boolean> {
        return this.desktop.api.window.current.isEnabled();
    }

    public isFocused(): Promise<boolean> {
        return this.desktop.api.window.current.isFocused();
    }

    public isFullscreen(): Promise<boolean> {
        return this.desktop.api.window.current.isFullscreen();
    }

    public isFullscreenable(): Promise<boolean> {
        return this.desktop.api.window.current.isFullscreenable();
    }

    public isKiosk(): Promise<boolean> {
        return this.desktop.api.window.current.isKiosk();
    }

    public isMaximizable(): Promise<boolean> {
        return this.desktop.api.window.current.isMaximizable();
    }

    public isMaximized(): Promise<boolean> {
        return this.desktop.api.window.current.isMaximized();
    }

    public isMenuBarAutoHide(): Promise<boolean> {
        return this.desktop.api.window.current.isMenuBarAutoHide();
    }

    public isMenuBarVisible(): Promise<boolean> {
        return this.desktop.api.window.current.isMenuBarVisible();
    }

    public isMinimizable(): Promise<boolean> {
        return this.desktop.api.window.current.isMinimizable();
    }

    public isMinimized(): Promise<boolean> {
        return this.desktop.api.window.current.isMinimized();
    }

    public isModal(): Promise<boolean> {
        return this.desktop.api.window.current.isModal();
    }

    public isMovable(): Promise<boolean> {
        return this.desktop.api.window.current.isMovable();
    }

    public isResizable(): Promise<boolean> {
        return this.desktop.api.window.current.isResizable();
    }

    public isVisible(): Promise<boolean> {
        return this.desktop.api.window.current.isVisible();
    }

    public maximize(): Promise<boolean> {
        return this.desktop.api.window.current.maximize();
    }

    public minimize(): Promise<boolean> {
        return this.desktop.api.window.current.minimize();
    }

    public moveTop(): Promise<boolean> {
        return this.desktop.api.window.current.moveTop();
    }

    public off(event: WindowEvents, listener: () => void) {
        this.desktop.api.window.current.off(event, listener);
    }

    public on(event: WindowEvents, listener: () => void) {
        this.desktop.api.window.current.on(event, listener);
    }

    public reload(): Promise<boolean> {
        return this.desktop.api.window.current.reload();
    }

    public restore(): Promise<boolean> {
        return this.desktop.api.window.current.restore();
    }

    public setAlwaysOnTop(flag: boolean): Promise<void> {
        return this.desktop.api.window.current.setAlwaysOnTop(flag);
    }

    public setBounds(bounds: Partial<IRectangle>, animate?: boolean): Promise<void> {
        return this.desktop.api.window.current.setBounds(bounds, animate);
    }

    public setFullScreen(flag: boolean): Promise<void> {
        return this.desktop.api.window.current.setFullScreen(flag);
    }

    public setKiosk(flag: boolean): Promise<void> {
        return this.desktop.api.window.current.setKiosk(flag);
    }

    public show(): Promise<void> {
        return this.desktop.api.window.current.show();
    }
}
