export { handler } from "./handler";

export const command = "restart [uid...]";

export const aliases = ["reload"];

export const describe = "Restart one or more instances";

export const builder = {
    uid: {
        array: true,
        demandOption: true,
        describe: "The instance uid",
    },
};
