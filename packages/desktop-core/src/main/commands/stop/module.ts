export { handler } from "./handler";

export const command = "stop [uid...]";

export const aliases = ["close", "rm"];

export const describe = "Stop one or more running instances";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The instance uid",
        array: true,
    },
};
