import { parse } from "url";

const argsToIgnore = ["--allow-file-access-from-files"];

/**
 * In production, skip the first argument.
 *
 * In development, find the main.js arg and start from there.
 * @param commandLine The command line to clean
 */
export const cleanCommandLine = (commandLine: string[]) => {
    const desktopArg = commandLine.find((arg) => arg.startsWith("desktop://"));
    if (desktopArg !== undefined) {
        return urlToCommandLine(desktopArg);
    }

    let argsToSkip = 1;
    const mainIndex = commandLine.findIndex((entry) => entry.endsWith("main.js"));
    if (mainIndex !== -1) {
        argsToSkip += mainIndex;
    }

    return commandLine.slice(argsToSkip).filter((arg) => !argsToIgnore.includes(arg));
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
