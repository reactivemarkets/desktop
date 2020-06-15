export { handler } from "./handler";

export const command = "hide [uid]";

export const describe = "Hide a visible window";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
