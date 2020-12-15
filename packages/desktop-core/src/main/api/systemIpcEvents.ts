import { ipcMain, app, powerMonitor } from "electron";
import { ReservedChannels } from "../../common";

export const systemIpcEvents = () => {
    const listenerMap = new Map<string, () => void>();

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
    ipcMain.on(ReservedChannels.system_off, (event, systemEvent) => {
        const key = `${event.sender.id}/${systemEvent}`;
        const listener = listenerMap.get(key);
        if (listener !== undefined) {
            listenerMap.delete(key);
            powerMonitor.removeListener(systemEvent, listener);
        }
    });
    ipcMain.on(ReservedChannels.system_on, (event, systemEvent) => {
        const listener = () => {
            event.sender.send(ReservedChannels.system_events, systemEvent);
        };

        const key = `${event.sender.id}/${systemEvent}`;
        listenerMap.set(key, listener);

        powerMonitor.addListener(systemEvent, listener);
    });
    ipcMain.handle(ReservedChannels.system_quit, () => {
        app.quit();
    });
    ipcMain.handle(ReservedChannels.system_showAboutPanel, () => {
        app.showAboutPanel();
    });
};
