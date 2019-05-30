/**
 * In production, skip the first argument.
 *
 * In development, find the main.js arg and start from there.
 * @param commandLine The command line to clean
 */
export const cleanCommandLine = (commandLine: string[]) => {
    const defaultArgsToSkip = 1;
    const mainIndex = commandLine.findIndex((entry) => entry.endsWith("main.js"));
    if (mainIndex === -1) {
        return commandLine.slice(defaultArgsToSkip);
    }

    const numberOfArgsToSkip = mainIndex + defaultArgsToSkip;

    return commandLine.slice(numberOfArgsToSkip);
};
