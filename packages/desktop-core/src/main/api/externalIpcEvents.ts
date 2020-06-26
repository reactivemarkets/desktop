import { ReservedChannels } from "../../common";
import { instanceService } from "../instances";
import { ipcExternalMain } from "../ipc";
import { windowService } from "../windowing";

export const externalIpcEvents = async (context?: string) => {
    await ipcExternalMain.whenReady(context);

    ipcExternalMain.handle(ReservedChannels.instances_get, ({ uid }) => {
        return instanceService.get(uid);
    });
    ipcExternalMain.handle(ReservedChannels.instances_list, () => {
        return instanceService.list();
    });
    ipcExternalMain.handle(ReservedChannels.instances_kill, ({ uid }) => {
        return instanceService.kill(uid);
    });
    ipcExternalMain.handle(ReservedChannels.instances_restart, ({ uid }) => {
        return instanceService.restart(uid);
    });
    ipcExternalMain.handle(ReservedChannels.instances_stop, ({ uid }) => {
        return instanceService.stop(uid);
    });
    ipcExternalMain.handle(ReservedChannels.window_hide, ({ uid }) => {
        windowService.from(uid)?.instance.hide();
    });
    ipcExternalMain.handle(ReservedChannels.window_openDevTools, ({ uid }) => {
        windowService.from(uid)?.instance.webContents.openDevTools();
    });
    ipcExternalMain.handle(ReservedChannels.window_show, ({ uid }) => {
        windowService.from(uid)?.instance.show();
    });
};
