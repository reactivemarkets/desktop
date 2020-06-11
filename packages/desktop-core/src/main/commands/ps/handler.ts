import { IConfiguration } from "@reactivemarkets/desktop-types";
import { printTable } from "console-table-printer";
import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IPsOptions } from "./iPsOptions";
import { ipcExternal } from "../../ipc";

export const handler = async (options: IPsOptions) => {
    logger.verbose("Ps command ran.");

    try {
        await ipcExternal.whenReady();

        const containers = await ipcExternal.invoke<IPsOptions, IConfiguration[]>(
            ReservedChannels.instances_list,
            options,
        );

        const details = containers.map((c) => {
            return {
                id: c.metadata.uid,
                name: c.metadata.name,
                namespace: c.metadata.namespace,
                kind: c.kind,
                created: c.status?.startTime,
            };
        });

        printTable(details);

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
