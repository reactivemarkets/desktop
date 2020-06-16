import * as yargs from "yargs";

export const parseCommandLine = (commandLine: string[]) => {
    return yargs
        .env("DESKTOP_API")
        .config()
        .option("allowed-origins", {
            array: true,
            default: ["file://", undefined],
        })
        .option("blocked-origins", {
            array: true,
            default: [],
        })
        .option("cert", {
            description: "Path to a PEM format certificate",
            string: true,
        })
        .option("key", {
            description: "Path to a private key for the corresponding certificate",
            string: true,
        })
        .option("host", {
            alias: "h",
            default: "127.0.0.1",
            string: true,
        })
        .option("port", {
            alias: "p",
            default: 8282,
            number: true,
        })
        .parse(commandLine);
};
