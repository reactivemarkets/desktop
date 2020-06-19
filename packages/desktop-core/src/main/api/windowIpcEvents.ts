import { BrowserWindow, ipcMain, Rectangle } from "electron";
import { ReservedChannels } from "../../common";

export const windowIpcEvents = () => {
    const listenerMap = new Map<string, () => void>();

    ipcMain.handle(ReservedChannels.window_blur, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.blur();
    });
    ipcMain.handle(ReservedChannels.window_center, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.center();
    });
    ipcMain.handle(ReservedChannels.window_close, (event) => {
        const window = BrowserWindow.fromWebContents(event.sender);
        if (window !== null && window.isClosable) {
            window.close();
        }
    });
    ipcMain.handle(ReservedChannels.window_destory, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.destroy();
    });
    ipcMain.handle(ReservedChannels.window_flashFrame, (event, flash: boolean) => {
        BrowserWindow.fromWebContents(event.sender)?.flashFrame(flash);
    });
    ipcMain.handle(ReservedChannels.window_focus, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.focus();
    });
    ipcMain.handle(ReservedChannels.window_getBounds, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.getBounds();
    });
    ipcMain.handle(ReservedChannels.window_getMinimumSize, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.getMinimumSize();
    });
    ipcMain.handle(ReservedChannels.window_hide, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.hide();
    });
    ipcMain.handle(ReservedChannels.window_isAlwaysOnTop, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isAlwaysOnTop();
    });
    ipcMain.handle(ReservedChannels.window_isCloseable, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isClosable();
    });
    ipcMain.handle(ReservedChannels.window_isEnabled, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isEnabled();
    });
    ipcMain.handle(ReservedChannels.window_isFocused, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isFocused();
    });
    ipcMain.handle(ReservedChannels.window_isFullscreen, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isFullScreen();
    });
    ipcMain.handle(ReservedChannels.window_isFullscreenable, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isFullScreenable();
    });
    ipcMain.handle(ReservedChannels.window_isKiosk, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isKiosk();
    });
    ipcMain.handle(ReservedChannels.window_isMaximizable, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMaximizable();
    });
    ipcMain.handle(ReservedChannels.window_isMaximized, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMaximized();
    });
    ipcMain.handle(ReservedChannels.window_isMenuBarAutoHide, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMenuBarAutoHide();
    });
    ipcMain.handle(ReservedChannels.window_isMenuBarVisible, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMenuBarVisible();
    });
    ipcMain.handle(ReservedChannels.window_isMinimizable, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMinimizable();
    });
    ipcMain.handle(ReservedChannels.window_isMinimized, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMinimized();
    });
    ipcMain.handle(ReservedChannels.window_isModal, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isModal();
    });
    ipcMain.handle(ReservedChannels.window_isMovable, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isMovable();
    });
    ipcMain.handle(ReservedChannels.window_isResizable, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isResizable();
    });
    ipcMain.handle(ReservedChannels.window_isVisible, (event) => {
        return BrowserWindow.fromWebContents(event.sender)?.isVisible();
    });
    ipcMain.handle(ReservedChannels.window_minimize, (event) => {
        const window = BrowserWindow.fromWebContents(event.sender);
        if (window !== null && window.minimizable) {
            window.minimize();
        }
    });
    ipcMain.handle(ReservedChannels.window_maximize, (event) => {
        const window = BrowserWindow.fromWebContents(event.sender);
        if (window !== null && window.maximizable) {
            window.maximize();
        }
    });
    ipcMain.handle(ReservedChannels.window_moveTop, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.moveTop();
    });
    ipcMain.on(ReservedChannels.window_off, (event, windowEvent) => {
        const key = `${event.sender.id}/${windowEvent}`;
        const listener = listenerMap.get(key);
        if (listener !== undefined) {
            listenerMap.delete(key);
            BrowserWindow.fromWebContents(event.sender)?.removeListener(windowEvent, listener);
        }
    });
    ipcMain.on(ReservedChannels.window_on, (event, windowEvent) => {
        const listener = () => {
            event.sender.send(ReservedChannels.window_events, windowEvent);
        };

        const key = `${event.sender.id}/${windowEvent}`;
        listenerMap.set(key, listener);

        BrowserWindow.fromWebContents(event.sender)?.addListener(windowEvent, listener);
    });
    ipcMain.handle(ReservedChannels.window_openDevTools, (event) => {
        event.sender.openDevTools();
    });
    ipcMain.handle(ReservedChannels.window_reload, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.reload();
    });
    ipcMain.handle(ReservedChannels.window_restore, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.restore();
    });
    ipcMain.handle(ReservedChannels.window_setAlwaysOnTop, (event, flag: boolean) => {
        BrowserWindow.fromWebContents(event.sender)?.setAlwaysOnTop(flag);
    });
    ipcMain.handle(ReservedChannels.window_setBounds, (event, bounds: Partial<Rectangle>, animate?: boolean) => {
        BrowserWindow.fromWebContents(event.sender)?.setBounds(bounds, animate);
    });
    ipcMain.handle(ReservedChannels.window_setFullScreen, (event, flag: boolean) => {
        BrowserWindow.fromWebContents(event.sender)?.setFullScreen(flag);
    });
    ipcMain.handle(ReservedChannels.window_setKiosk, (event, flag: boolean) => {
        BrowserWindow.fromWebContents(event.sender)?.setKiosk(flag);
    });
    ipcMain.handle(ReservedChannels.window_show, (event) => {
        BrowserWindow.fromWebContents(event.sender)?.show();
    });
};
