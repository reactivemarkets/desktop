import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { ipcExternal } from "../../ipc";
import { logger } from "../../logging";
import { IHideOptions } from "./iHideOptions";

export const handler = async (options: IHideOptions) => {
    logger.verbose("Hide command ran.");

    try {
        await ipcExternal.whenReady();

        await ipcExternal.invoke(ReservedChannels.window_hide, options);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
