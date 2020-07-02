import { app } from "electron";
import * as yaml from "js-yaml";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { ILogsOptions } from "./iLogsOptions";
import { ipcExternal } from "../../ipc";
import { Output } from "../../configuration";

export const handler = async ({ context, limit, output, uid }: ILogsOptions) => {
    logger.verbose("Logs command ran.");

    try {
        await ipcExternal.whenReady(context);

        const logs = await ipcExternal.invoke<Partial<ILogsOptions>, unknown[] | undefined>(
            ReservedChannels.logger_query,
            {
                limit,
                uid,
            },
        );

        logs?.reverse()?.forEach((log) => {
            switch (output) {
                case Output.Yaml: {
                    const logLine = yaml.safeDump(log, {
                        indent: 2,
                    });

                    console.log(logLine);
                    break;
                }
                case Output.Json: {
                    const logLine = JSON.stringify(log);

                    console.log(logLine);
                    break;
                }
            }
        });

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
