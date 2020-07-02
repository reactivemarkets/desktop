import { app } from "electron";
import * as yaml from "js-yaml";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { ILogsOptions } from "./iLogsOptions";
import { ipcExternal } from "../../ipc";
import { Output } from "../../configuration";

const logLine = <T>(output: Output, log: T) => {
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
};

export const handler = async ({ context, details, follow, tail, output, uid }: ILogsOptions) => {
    logger.verbose("Logs command ran.");

    try {
        await ipcExternal.whenReady(context);

        if (follow) {
            await ipcExternal.invoke(ReservedChannels.logger_stream);

            ipcExternal.on(ReservedChannels.logger_stream, (log) => {
                logLine(output, log);
            });
        } else {
            const logs = await ipcExternal.invoke<unknown, unknown[] | undefined>(ReservedChannels.logger_query, {
                fields: details ? null : ["message"],
                limit: tail,
                uid,
            });

            logs?.reverse()?.forEach((log) => {
                logLine(output, log);
            });

            app.exit();
        }
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
