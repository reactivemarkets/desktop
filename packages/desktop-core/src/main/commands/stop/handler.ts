import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { ipcExternal } from "../../ipc";
import { logger } from "../../logging";
import { IStopOptions } from "./iStopOptions";

export const handler = async ({ context, uid }: IStopOptions) => {
    logger.verbose("Stop command ran.");

    try {
        await ipcExternal.whenReady(context);

        const stopped = await ipcExternal.invoke<unknown, string[]>(ReservedChannels.instances_stop, { uid });

        stopped.forEach((id) => {
            console.log(id);
        });

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
