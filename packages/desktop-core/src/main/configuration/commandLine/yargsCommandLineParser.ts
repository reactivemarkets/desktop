import { app } from "electron";
import * as yargs from "yargs";
import {
    clearModule,
    describeModule,
    initModule,
    startModule,
    stopModule,
    restartModule,
    psModule,
    devToolsModule,
    killModule,
    showModule,
    hideModule,
} from "../../commands";

const columnWidth = Math.min(yargs.terminalWidth(), 120);

/**
 * Parse the command line.
 * @param commandLine The cleaned command line
 * @param exitProcess Exit if the command line is badly formed
 */
export const parseCommandLine = (commandLine: string[], exitProcess = true) => {
    const version = app.getVersion();

    return yargs
        .command(clearModule)
        .command(describeModule)
        .command(devToolsModule)
        .command(hideModule)
        .command(initModule)
        .command(killModule)
        .command(psModule)
        .command(restartModule)
        .command(showModule)
        .command(startModule)
        .command(stopModule)
        .demandCommand(1, "Specify at least 1 command.")
        .recommendCommands()
        .version(version)
        .exitProcess(exitProcess)
        .epilogue('Run "$0 COMMAND --help" for more information on a command.')
        .usage("Usage: $0 COMMAND [OPTIONS]\n\nA multi-window desktop runtime.")
        .wrap(columnWidth)
        .parse(commandLine);
};
