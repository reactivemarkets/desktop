import { app } from "electron";
import * as yaml from "js-yaml";
import { logger } from "../../logging";
import { ipcExternal } from "../../ipc";
import { IVersionOptions } from "./iVersionOptions";
import { Output } from "../../configuration";
import { ReservedChannels } from "../../../common";

export const handler = async ({ context, output }: IVersionOptions) => {
    logger.verbose("Version command ran.");

    try {
        await ipcExternal.whenReady(context);

        const versions = await ipcExternal.invoke(ReservedChannels.system_getVersions);

        switch (output) {
            case Output.Json: {
                const versionString = JSON.stringify(versions);

                console.log(versionString);
                break;
            }
            case Output.Yaml: {
                const versionString = yaml.safeDump(versions, {
                    indent: 2,
                });

                console.log(versionString);
            }
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
