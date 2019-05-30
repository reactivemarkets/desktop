import { handler } from "./startCommandHandler";

export const command = ["start", "$0", "up", "run"];

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

export { handler };
