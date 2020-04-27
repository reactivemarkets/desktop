import { ipcRenderer } from "electron";
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
        maximize: () => ipcRenderer.invoke(ReservedChannels.window_maximize),
        minimize: () => ipcRenderer.invoke(ReservedChannels.window_minimize),
        moveTop: () => ipcRenderer.invoke(ReservedChannels.window_moveTop),
        reload: () => ipcRenderer.invoke(ReservedChannels.window_reload),
        restore: () => ipcRenderer.invoke(ReservedChannels.window_restore),
        setFullScreen: (flag: boolean) => ipcRenderer.invoke(ReservedChannels.window_setFullScreen, flag),
        show: () => ipcRenderer.invoke(ReservedChannels.window_show),
    },
};
