import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IRestartOptions } from "./iRestartOptions";
import { ipcExternal } from "../../ipc";

export const handler = async ({ context, uid }: IRestartOptions) => {
    logger.verbose("Restart command ran.");

    try {
        await ipcExternal.whenReady(context);

        await ipcExternal.invoke(ReservedChannels.instances_restart, { uid });

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
