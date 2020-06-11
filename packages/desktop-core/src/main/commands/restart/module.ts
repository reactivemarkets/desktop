export { handler } from "./handler";

export const command = "restart [uid]";

export const aliases = ["reload"];

export const describe = "Restart an instance";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
