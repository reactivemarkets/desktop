import { ipcMain, app } from "electron";
import { ReservedChannels } from "../../common";

export const systemIpcEvents = () => {
    ipcMain.handle(ReservedChannels.system_getAppName, () => {
        return app.getName();
    });
    ipcMain.handle(ReservedChannels.system_getAppVersion, () => {
        return app.getVersion();
    });
    ipcMain.handle(ReservedChannels.system_getVersions, () => {
        return process.versions;
    });
    ipcMain.handle(ReservedChannels.system_information, async () => {
        const gpu = await app.getGPUInfo("basic");

        return {
            arch: process.arch,
            cpu: process.getSystemVersion(),
            gpu,
            pid: process.pid,
            platform: process.platform,
            sandboxed: process.sandboxed,
        };
    });
    ipcMain.handle(ReservedChannels.system_quit, () => {
        app.quit();
    });
    ipcMain.handle(ReservedChannels.system_showAboutPanel, () => {
        app.showAboutPanel();
    });
};
