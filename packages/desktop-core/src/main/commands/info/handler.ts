import { app } from "electron";
import * as yaml from "js-yaml";
import { logger } from "../../logging";
import { ipcExternal } from "../../ipc";
import { Output } from "../../configuration";
import { ReservedChannels } from "../../../common";
import { IInfoOptions } from "./iInfoOptions";

export const handler = async ({ context, output }: IInfoOptions) => {
    logger.verbose("Version command ran.");

    try {
        await ipcExternal.whenReady(context);

        const information = await ipcExternal.invoke(ReservedChannels.system_information);

        switch (output) {
            case Output.Json: {
                const versionString = JSON.stringify(information);

                console.log(versionString);
                break;
            }
            case Output.Yaml: {
                const versionString = yaml.safeDump(information, {
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
