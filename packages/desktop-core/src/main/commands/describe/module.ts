import { Output } from "../../configuration";

export { handler } from "./handler";

export const command = "describe [uid]";

export const aliases = ["get"];

export const describe = "Show details of a specific instance";

export const builder = {
    output: {
        alias: "o",
        choices: Object.values(Output),
        default: Output.Yaml,
        describe: "The output format",
    },
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
