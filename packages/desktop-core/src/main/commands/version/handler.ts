import { app } from "electron";
import * as yaml from "js-yaml";
import { logger } from "../../logging";
import { IVersionOptions } from "./iVersionOptions";
import { Output } from "../../configuration";

export const handler = ({ output }: IVersionOptions) => {
    logger.verbose("Version command ran.");

    try {
        const { versions } = process;

        switch (output) {
            case Output.Json: {
                const versionString = JSON.stringify(versions);

                logger.info(versionString);
                break;
            }
            case Output.Yaml:
            default: {
                const versionString = yaml.safeDump(versions, {
                    indent: 2,
                });

                logger.info(versionString);
            }
        }

        app.exit();
    } catch (error) {
        logger.error(`${error}`);
        app.exit(1);
    }
};
