import { app } from "electron";
import * as path from "path";

import { configurationGenerator } from "../../configuration/generators";
import { configurationWriter } from "../../configuration/writers";
import { logger } from "../../logging";

import { IInitOptions } from "./iInitOptions";

export const handler = (options: IInitOptions) => {
    const workingDirectory = process.cwd();

    logger.verbose(`init command ran from ${workingDirectory}`);

    const { name = `${options.kind} name` } = options;

    const configurationPath = `${workingDirectory}${path.sep}${options.kind}.${options.output}`;

    logger.verbose(`creating config at ${configurationPath}`);

    configurationGenerator
        .generate(options.kind, name, options.url)
        .then(async (defaultConfig) => configurationWriter.write(configurationPath, defaultConfig))
        .then(() => {
            logger.info(`configuration written to ${configurationPath}`);
            app.exit();
        })
        .catch((error) => {
            logger.error(`failed to write config: ${error}`);
            app.exit(1);
        });
};
