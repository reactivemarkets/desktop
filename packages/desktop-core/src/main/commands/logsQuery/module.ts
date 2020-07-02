import { Output } from "../../configuration";

export { handler } from "./handler";

export const command = "logs";

export const describe = "Fetch the logs of an instance";

export const builder = {
    limit: {
        alias: "l",
        describe: "Limit the number log entries to return.",
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
