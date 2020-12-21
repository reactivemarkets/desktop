import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IKillOptions } from "./iKillOptions";
import { ipcExternal } from "../../ipc";

export const handler = async ({ context, uid }: IKillOptions) => {
    logger.verbose("Kill command ran.");

    try {
        await ipcExternal.whenReady(context);

        const killed = await ipcExternal.invoke<unknown, string[]>(ReservedChannels.instances_kill, { uid });

        killed.forEach((id) => {
            console.log(id);
        });

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
