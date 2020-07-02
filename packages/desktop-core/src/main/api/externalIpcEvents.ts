import { ReservedChannels } from "../../common";
import { instanceService } from "../instances";
import { ipcExternalMain } from "../ipc";
import { windowService } from "../windowing";
import { logger } from "../logging";

export const externalIpcEvents = async (context?: string) => {
    await ipcExternalMain.whenReady(context);

    ipcExternalMain.handle(ReservedChannels.instances_get, ({ uid }) => {
        return instanceService.get(uid);
    });
    ipcExternalMain.handle(ReservedChannels.instances_list, ({ kind, namespace }) => {
        return instanceService.list().filter((configuration) => {
            if (kind !== undefined && configuration.kind !== kind) {
                return false;
            }
            if (namespace !== undefined && configuration.metadata.namespace !== namespace) {
                return false;
            }

            return true;
        });
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
    ipcExternalMain.handle(ReservedChannels.logger_query, ({ limit = 10 }) => {
        return new Promise((resolve, reject) => {
            logger.query(
                {
                    limit,
                    order: "desc",
                    fields: null,
                },
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.file);
                    }
                },
            );
        });
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
