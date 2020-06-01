import { app } from "electron";
import * as path from "path";

import { configurationGenerator, configurationWriter } from "../../configuration";
import { logger } from "../../logging";

import { IInitOptions } from "./iInitOptions";

export const handler = async (options: IInitOptions) => {
    try {
        const workingDirectory = process.cwd();

        logger.verbose(`Init command ran from ${workingDirectory}`);

        const { kind, name = `${options.kind} name`, output, url } = options;

        const configurationPath = path.join(workingDirectory, `${kind}.${output}`);

        logger.verbose(`Creating config at ${configurationPath}`);

        const defaultConfig = await configurationGenerator.generate(kind, name, url);

        await configurationWriter.write(configurationPath, defaultConfig);

        logger.info(`Configuration written to ${configurationPath}`);
        app.exit();
    } catch (error) {
        logger.error(`Failed to write config: ${error}`);
        app.exit(1);
    }
};
