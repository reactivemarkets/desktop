import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IShutdownOptions } from "./iShutdownOptions";
import { ipcExternal } from "../../ipc";

export const handler = async ({ context }: IShutdownOptions) => {
    logger.verbose("Shutdown command ran.");

    try {
        await ipcExternal.whenReady(context);

        await ipcExternal.invoke(ReservedChannels.system_quit);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
