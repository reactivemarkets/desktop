import * as yargs from "yargs";

import { cacheModule, initModule, startModule } from "../../commands";

/**
 * Parse the command line.
 * @param commandLine The cleaned command line
 * @param exitProcess Exit if the command line is badly formed
 */
export const parseCommandLine = (commandLine: string[], exitProcess: boolean = true) => {
    return yargs
        .command(cacheModule)
        .command(initModule)
        .command(startModule)
        .demandCommand(1, "Specify at least 1 command.")
        .recommendCommands()
        .strict()
        .exitProcess(exitProcess)
        .epilogue('Use "<command> --help" for more information about a given command.')
        .parse(commandLine);
};
