import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { ipcExternal } from "../../ipc";
import { logger } from "../../logging";
import { IStopOptions } from "./iStopOptions";

export const handler = async (options: IStopOptions) => {
    logger.verbose("Stop command ran.");

    try {
        await ipcExternal.whenReady();

        await ipcExternal.invoke(ReservedChannels.instances_stop, options);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
