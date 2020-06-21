import { IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import moment from "moment";
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
            const details = containers.reduce((prev, c) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                prev[c.metadata.uid] = {
                    name: c.metadata.name,
                    namespace: c.metadata.namespace,
                    kind: c.kind,
                    created: moment(c.status?.startTime).fromNow(),
                };

                return prev;
            }, {});

            console.table(details);
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
