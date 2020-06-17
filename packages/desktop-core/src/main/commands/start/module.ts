export { handler } from "./handler";

export const command = "start";

export const aliases = ["$0", "up", "run", "open"];

export const describe = "Start the application with the specified config";

export const builder = {
    file: {
        alias: "f",
        array: true,
        describe: "A configuration file or directory to load from",
    },
    url: {
        alias: "u",
        array: true,
        describe: "A url to run with",
    },
};
