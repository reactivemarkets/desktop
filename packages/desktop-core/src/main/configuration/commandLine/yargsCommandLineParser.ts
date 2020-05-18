import * as yargs from "yargs";

import { cacheModule, initModule, startModule } from "../../commands";

const columnWidth = Math.min(yargs.terminalWidth(), 120);

/**
 * Parse the command line.
 * @param commandLine The cleaned command line
 * @param exitProcess Exit if the command line is badly formed
 */
export const parseCommandLine = (commandLine: string[], exitProcess = true) => {
    return yargs
        .command(cacheModule)
        .command(initModule)
        .command(startModule)
        .demandCommand(1, "Specify at least 1 command.")
        .recommendCommands()
        .strict()
        .exitProcess(exitProcess)
        .epilogue('Run "$0 COMMAND --help" for more information on a command.')
        .usage("Usage: $0 COMMAND [OPTIONS]\n\nA multi-window desktop runtime")
        .wrap(columnWidth)
        .parse(commandLine);
};
