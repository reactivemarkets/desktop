export { handler } from "./handler";

export const command = "describe [uid]";

export const aliases = ["get"];

export const describe = "Show details of a specific instance";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
