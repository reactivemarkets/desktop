export { handler } from "./handler";

export const command = "devTools [uid]";

export const describe = "Open the windows devTools";

export const builder = {
    uid: {
        demandOption: true,
        describe: "The application uid",
        string: true,
    },
};
