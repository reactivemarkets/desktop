import { ipcRenderer, Rectangle } from "electron";
import { ReservedChannels } from "../../common";

export const window = {
    current: {
        blur: () => ipcRenderer.invoke(ReservedChannels.window_blur),
        center: () => ipcRenderer.invoke(ReservedChannels.window_center),
        close: () => ipcRenderer.invoke(ReservedChannels.window_close),
        flashFrame: (flash: boolean) => ipcRenderer.invoke(ReservedChannels.window_flashFrame, flash),
        focus: () => ipcRenderer.invoke(ReservedChannels.window_focus),
        getBounds: () => ipcRenderer.invoke(ReservedChannels.window_getBounds),
        getMinimumSize: () => ipcRenderer.invoke(ReservedChannels.window_getMinimumSize),
        hide: () => ipcRenderer.invoke(ReservedChannels.window_hide),
        isAlwaysOnTop: () => ipcRenderer.invoke(ReservedChannels.window_isAlwaysOnTop),
        isCloseable: () => ipcRenderer.invoke(ReservedChannels.window_isCloseable),
        isEnabled: () => ipcRenderer.invoke(ReservedChannels.window_isEnabled),
        isFocused: () => ipcRenderer.invoke(ReservedChannels.window_isFocused),
        isFullscreen: () => ipcRenderer.invoke(ReservedChannels.window_isFullscreen),
        isFullscreenable: () => ipcRenderer.invoke(ReservedChannels.window_isFullscreenable),
        isKiosk: () => ipcRenderer.invoke(ReservedChannels.window_isKiosk),
        isMaximizable: () => ipcRenderer.invoke(ReservedChannels.window_isMaximizable),
        isMaximized: () => ipcRenderer.invoke(ReservedChannels.window_isMaximized),
        isMenuBarAutoHide: () => ipcRenderer.invoke(ReservedChannels.window_isMenuBarAutoHide),
        isMenuBarVisible: () => ipcRenderer.invoke(ReservedChannels.window_isMenuBarVisible),
        isMinimizable: () => ipcRenderer.invoke(ReservedChannels.window_isMinimizable),
        isMinimized: () => ipcRenderer.invoke(ReservedChannels.window_isMinimized),
        isModal: () => ipcRenderer.invoke(ReservedChannels.window_isModal),
        isMovable: () => ipcRenderer.invoke(ReservedChannels.window_isMovable),
        isResizable: () => ipcRenderer.invoke(ReservedChannels.window_isResizable),
        isVisible: () => ipcRenderer.invoke(ReservedChannels.window_isVisible),
        maximize: () => ipcRenderer.invoke(ReservedChannels.window_maximize),
        minimize: () => ipcRenderer.invoke(ReservedChannels.window_minimize),
        moveTop: () => ipcRenderer.invoke(ReservedChannels.window_moveTop),
        reload: () => ipcRenderer.invoke(ReservedChannels.window_reload),
        restore: () => ipcRenderer.invoke(ReservedChannels.window_restore),
        setAlwaysOnTop: (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setAlwaysOnTop, flag),
        setBounds: (bounds: Partial<Rectangle>, animate?: boolean) => {
            return ipcRenderer.invoke(ReservedChannels.window_setBounds, bounds, animate);
        },
        setFullScreen: (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setFullScreen, flag),
        setKiosk: (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setKiosk, flag),
        show: () => ipcRenderer.invoke(ReservedChannels.window_show),
    },
};
