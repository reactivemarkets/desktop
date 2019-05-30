import * as yargs from "yargs";

import * as clearCommandModule from "../../commands/cache/clearCommandModule";
import * as initCommandModule from "../../commands/init/initCommandModule";
import * as startCommandModule from "../../commands/start/startCommandModule";

/**
 * Parse the command line.
 * @param commandLine The cleaned command line
 * @param exitProcess Exit if the command line is badly formed
 */
export const parseCommandLine = (commandLine: string[],
                                 exitProcess: boolean = true) => {
    return yargs
        .command(clearCommandModule)
        .command(initCommandModule)
        .command(startCommandModule)
        .demandCommand(1, "Specify at least 1 command.")
        .recommendCommands()
        .strict()
        .exitProcess(exitProcess)
        .epilogue('Use "<command> --help" for more information about a given command.')
        .parse(commandLine);
};
