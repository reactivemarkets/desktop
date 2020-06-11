export { handler } from "./handler";

export const command = "stop [uid]";

export const aliases = ["close"];

export const describe = "Stop a running instance";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
