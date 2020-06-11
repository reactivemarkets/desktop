import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IKillOptions } from "./iStopOptions";
import { ipcExternal } from "../../ipc";

export const handler = async (options: IKillOptions) => {
    logger.verbose("Stop command ran.");

    try {
        await ipcExternal.whenReady();

        await ipcExternal.invoke(ReservedChannels.instances_kill, options);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
