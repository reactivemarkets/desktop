import { ipcMain, app } from "electron";
import { ReservedChannels } from "../../common";

export const systemIpcEvents = () => {
    ipcMain.handle(ReservedChannels.system_quit, () => {
        app.quit();
    });
    ipcMain.handle(ReservedChannels.system_showAboutPanel, () => {
        app.showAboutPanel();
    });
};
