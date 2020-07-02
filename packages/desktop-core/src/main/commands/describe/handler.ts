import { IConfiguration } from "@reactivemarkets/desktop-types";
import { app } from "electron";
import { ReservedChannels } from "../../../common";
import { logger } from "../../logging";
import { IDescribeOptions } from "./iDescribeOptions";
import { ipcExternal } from "../../ipc";
import { yamlConfigurationParser, Output, jsonConfigurationParser } from "../../configuration";

export const handler = async ({ context, output, uid }: IDescribeOptions) => {
    logger.verbose("Ps command ran.");

    try {
        await ipcExternal.whenReady(context);

        const container = await ipcExternal.invoke<Partial<IDescribeOptions>, IConfiguration | undefined>(
            ReservedChannels.instances_get,
            { uid },
        );

        if (container !== undefined) {
            switch (output) {
                case Output.Json: {
                    const json = jsonConfigurationParser.stringify(container);

                    console.log(json);
                    break;
                }
                case Output.Yaml: {
                    const yaml = yamlConfigurationParser.stringify(container);

                    console.log(yaml);
                    break;
                }
            }
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
