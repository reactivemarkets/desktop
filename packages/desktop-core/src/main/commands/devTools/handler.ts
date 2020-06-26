import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { ipcExternal } from "../../ipc";
import { logger } from "../../logging";
import { IDevToolsOptions } from "./iDevToolsOptions";

export const handler = async ({ context, uid }: IDevToolsOptions) => {
    logger.verbose("Open dev tools command ran.");

    try {
        await ipcExternal.whenReady(context);

        await ipcExternal.invoke(ReservedChannels.window_openDevTools, { uid });

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
