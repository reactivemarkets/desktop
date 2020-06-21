import { Output } from "../../configuration";

export { handler } from "./handler";

export const command = "version";

export const describe = "Show the Desktop version information";

export const builder = {
    output: {
        alias: "o",
        choices: Object.values(Output),
        default: Output.Yaml,
        describe: "The output format",
    },
};
