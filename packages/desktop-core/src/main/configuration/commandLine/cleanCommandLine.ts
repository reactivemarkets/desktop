import { parse } from "url";

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

/**
 * Converts a desktop protocol url to command line args
 * @param desktopUrl a url with the desktop: protocol
 */
export const urlToCommandLine = (desktopUrl: string) => {
    const url = parse(desktopUrl);

    const protocol = url.protocol ?? "desktop:";

    return url.href
        .replace(`${protocol}//`, "")
        .split(/[?&]+/)
        .map((arg) => {
            if (arg.includes("=")) {
                return `--${arg}`;
            }

            return arg;
        });
};
