import { IConfiguration } from "@reactivemarkets/desktop-types";
import { Table } from "console-table-printer";
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

        if (options.quiet) {
            containers.forEach((c) => logger.info(`${c.metadata.uid}`));
        } else {
            const details = containers.map((c) => {
                return {
                    id: c.metadata.uid,
                    name: c.metadata.name,
                    namespace: c.metadata.namespace,
                    kind: c.kind,
                    created: c.status?.startTime,
                };
            });

            const table = new Table({
                columns: [
                    { name: "id", alignment: "left" },
                    { name: "name", alignment: "left" },
                    { name: "namespace", alignment: "left" },
                    { name: "kind", alignment: "left" },
                    { name: "created" },
                ],
            });
            table.addRows(details);
            table.printTable();
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
