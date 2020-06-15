import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { ipcExternal } from "../../ipc";
import { logger } from "../../logging";
import { IShowOptions } from "./iShowOptions";

export const handler = async (options: IShowOptions) => {
    logger.verbose("Show command ran.");

    try {
        await ipcExternal.whenReady();

        await ipcExternal.invoke(ReservedChannels.window_show, options);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
