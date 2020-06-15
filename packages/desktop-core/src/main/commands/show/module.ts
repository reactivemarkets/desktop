export { handler } from "./handler";

export const command = "show [uid]";

export const describe = "Show a hidden window";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
