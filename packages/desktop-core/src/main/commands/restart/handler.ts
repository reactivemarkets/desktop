import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IRestartOptions } from "./iStopOptions";
import { ipcExternal } from "../../ipc";

export const handler = async (options: IRestartOptions) => {
    logger.verbose("Restart command ran.");

    try {
        await ipcExternal.whenReady();

        await ipcExternal.invoke(ReservedChannels.instances_restart, options);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
