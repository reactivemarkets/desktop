import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IKillOptions } from "./iStopOptions";
import { ipcExternal } from "../../ipc";

export const handler = async ({ context, uid }: IKillOptions) => {
    logger.verbose("Stop command ran.");

    try {
        await ipcExternal.whenReady(context);

        await ipcExternal.invoke(ReservedChannels.instances_kill, { uid });

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
