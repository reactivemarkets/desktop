import { IConfiguration } from "@reactivemarkets/desktop-types";
import Table from "easy-table";
import { app } from "electron";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import * as yaml from "js-yaml";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IPsOptions } from "./iPsOptions";
import { ipcExternal } from "../../ipc";
import { Output } from "../../configuration";

dayjs.extend(relativeTime);

export const handler = async ({ context, quiet, output, kind, namespace }: IPsOptions) => {
    logger.verbose("Ps command ran.");

    try {
        await ipcExternal.whenReady(context);

        const containers = await ipcExternal.invoke<unknown, IConfiguration[]>(ReservedChannels.instances_list, {
            kind,
            namespace,
        });

        if (quiet) {
            containers.forEach((c) => logger.info(`${c.metadata.uid}`));
        } else {
            switch (output) {
                case Output.Json: {
                    const details = JSON.stringify(containers);

                    logger.info(details);
                    break;
                }
                case Output.Yaml: {
                    const details = yaml.safeDump(containers, {
                        indent: 2,
                    });

                    logger.info(details);
                    break;
                }
                default: {
                    const instances = containers.map((c) => {
                        return {
                            uid: c.metadata.uid,
                            name: c.metadata.name,
                            namespace: c.metadata.namespace,
                            kind: c.kind,
                            created: dayjs(c.status?.startTime).fromNow(),
                        };
                    });

                    console.log(Table.print(instances));
                }
            }
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
