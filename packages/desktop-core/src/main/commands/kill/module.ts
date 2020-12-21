export { handler } from "./handler";

export const command = "kill [uid...]";

export const aliases = ["destroy"];

export const describe = "Kill one or more running instances";

export const builder = {
    uid: {
        array: true,
        demandOption: true,
        describe: "The application uid",
    },
};
