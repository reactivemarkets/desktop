import { ipcRenderer, Rectangle } from "electron";
import { TypedEmitter } from "tiny-typed-emitter";
import { ReservedChannels } from "../../common";

class CurrentWindow {
    #emitter = new TypedEmitter();

    public constructor() {
        ipcRenderer.on(ReservedChannels.window_events, (_, event) => {
            this.#emitter.emit(event);
        });
    }

    public blur = () => ipcRenderer.invoke(ReservedChannels.window_blur);
    public center = () => ipcRenderer.invoke(ReservedChannels.window_center);
    public close = () => ipcRenderer.invoke(ReservedChannels.window_close);
    public flashFrame = (flash: boolean) => ipcRenderer.invoke(ReservedChannels.window_flashFrame, flash);
    public focus = () => ipcRenderer.invoke(ReservedChannels.window_focus);
    public getBounds = () => ipcRenderer.invoke(ReservedChannels.window_getBounds);
    public getMinimumSize = () => ipcRenderer.invoke(ReservedChannels.window_getMinimumSize);
    public hide = () => ipcRenderer.invoke(ReservedChannels.window_hide);
    public isAlwaysOnTop = () => ipcRenderer.invoke(ReservedChannels.window_isAlwaysOnTop);
    public isCloseable = () => ipcRenderer.invoke(ReservedChannels.window_isCloseable);
    public isEnabled = () => ipcRenderer.invoke(ReservedChannels.window_isEnabled);
    public isFocused = () => ipcRenderer.invoke(ReservedChannels.window_isFocused);
    public isFullscreen = () => ipcRenderer.invoke(ReservedChannels.window_isFullscreen);
    public isFullscreenable = () => ipcRenderer.invoke(ReservedChannels.window_isFullscreenable);
    public isKiosk = () => ipcRenderer.invoke(ReservedChannels.window_isKiosk);
    public isMaximizable = () => ipcRenderer.invoke(ReservedChannels.window_isMaximizable);
    public isMaximized = () => ipcRenderer.invoke(ReservedChannels.window_isMaximized);
    public isMenuBarAutoHide = () => ipcRenderer.invoke(ReservedChannels.window_isMenuBarAutoHide);
    public isMenuBarVisible = () => ipcRenderer.invoke(ReservedChannels.window_isMenuBarVisible);
    public isMinimizable = () => ipcRenderer.invoke(ReservedChannels.window_isMinimizable);
    public isMinimized = () => ipcRenderer.invoke(ReservedChannels.window_isMinimized);
    public isModal = () => ipcRenderer.invoke(ReservedChannels.window_isModal);
    public isMovable = () => ipcRenderer.invoke(ReservedChannels.window_isMovable);
    public isResizable = () => ipcRenderer.invoke(ReservedChannels.window_isResizable);
    public isVisible = () => ipcRenderer.invoke(ReservedChannels.window_isVisible);
    public maximize = () => ipcRenderer.invoke(ReservedChannels.window_maximize);
    public minimize = () => ipcRenderer.invoke(ReservedChannels.window_minimize);
    public moveTop = () => ipcRenderer.invoke(ReservedChannels.window_moveTop);

    public off = (event: string, listener: () => void) => {
        this.#emitter.removeListener(event, listener);

        const listenerCount = this.#emitter.listenerCount(event);
        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.window_off, event);
        }
    };

    public on = (event: string, listener: () => void) => {
        const listenerCount = this.#emitter.listenerCount(event);
        this.#emitter.addListener(event, listener);

        if (listenerCount === 0) {
            ipcRenderer.send(ReservedChannels.window_on, event);
        }
    };

    public reload = () => ipcRenderer.invoke(ReservedChannels.window_reload);
    public restore = () => ipcRenderer.invoke(ReservedChannels.window_restore);
    public setAlwaysOnTop = (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setAlwaysOnTop, flag);

    public setBounds = (bounds: Partial<Rectangle>, animate?: boolean) => {
        return ipcRenderer.invoke(ReservedChannels.window_setBounds, bounds, animate);
    };

    public setFullScreen = (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setFullScreen, flag);
    public setKiosk = (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setKiosk, flag);
    public show = () => ipcRenderer.invoke(ReservedChannels.window_show);
    public unmaximize = () => ipcRenderer.invoke(ReservedChannels.window_unmaximize);
}

export const window = {
    current: new CurrentWindow(),
};
