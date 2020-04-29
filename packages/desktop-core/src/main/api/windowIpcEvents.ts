import { BrowserWindow, ipcMain, Rectangle } from "electron";
import { ReservedChannels } from "../../common";

export const windowIpcEvents = () => {
    ipcMain.handle(ReservedChannels.window_blur, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.blur();
    });
    ipcMain.handle(ReservedChannels.window_center, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.center();
    });
    ipcMain.handle(ReservedChannels.window_close, (event) => {
        const window = BrowserWindow.fromWebContents(event.sender);
        if (window !== null && window.isClosable) {
            window.close();
        }
    });
    ipcMain.handle(ReservedChannels.window_flashFrame, (event, flash: boolean) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.flashFrame(flash);
    });
    ipcMain.handle(ReservedChannels.window_focus, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.focus();
    });
    ipcMain.handle(ReservedChannels.window_getBounds, (event) => {
        return BrowserWindow
            .fromWebContents(event.sender)
            ?.getBounds();
    });
    ipcMain.handle(ReservedChannels.window_getMinimumSize, (event) => {
        return BrowserWindow
            .fromWebContents(event.sender)
            ?.getMinimumSize();
    });
    ipcMain.handle(ReservedChannels.window_hide, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.hide();
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
        BrowserWindow
            .fromWebContents(event.sender)
            ?.moveTop();
    });
    ipcMain.handle(ReservedChannels.window_reload, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.reload();
    });
    ipcMain.handle(ReservedChannels.window_restore, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.restore();
    });
    ipcMain.handle(ReservedChannels.window_setBounds, (event, bounds: Partial<Rectangle>, animate?: boolean) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.setBounds(bounds, animate);
    });
    ipcMain.handle(ReservedChannels.window_setFullScreen, (event, flag: boolean) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.setFullScreen(flag);
    });
    ipcMain.handle(ReservedChannels.window_show, (event) => {
        BrowserWindow
            .fromWebContents(event.sender)
            ?.show();
    });
};
