import { IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IDescribeOptions } from "./iDescribeOptions";
import { ipcExternal } from "../../ipc";
import { yamlConfigurationParser } from "../../configuration";

export const handler = async ({ context, uid }: IDescribeOptions) => {
    logger.verbose("Ps command ran.");

    try {
        await ipcExternal.whenReady(context);

        const container = await ipcExternal.invoke<IDescribeOptions, IConfiguration | undefined>(
            ReservedChannels.instances_get,
            { uid },
        );

        if (container !== undefined) {
            const yaml = yamlConfigurationParser.stringify(container);

            logger.info(yaml);
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
