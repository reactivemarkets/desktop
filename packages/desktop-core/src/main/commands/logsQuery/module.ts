import { Output } from "../../configuration";

export { handler } from "./handler";

export const command = "logs";

export const describe = "Fetch the logs of an instance";

export const builder = {
    details: {
        boolean: true,
        describe: "Show extra details provided to logs",
    },
    follow: {
        alias: "f",
        boolean: true,
        describe: "Follow log output",
    },
    tail: {
        default: 10,
        describe: "Number of lines to show from the end of the logs",
        number: true,
    },
    output: {
        alias: "o",
        choices: Object.values(Output),
        default: Output.Json,
        describe: "The output format",
    },
    uid: {
        describe: "The instance uid",
        string: true,
    },
};
