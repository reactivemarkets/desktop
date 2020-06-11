export { handler } from "./handler";

export const command = "kill [uid]";

export const aliases = ["destroy"];

export const describe = "Kill a running instance";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
