export { handler } from "./handler";

export const command = "ps";

export const describe = "List instances";

export const builder = {
    kind: {
        alias: "k",
        describe: "The instance kind",
        string: true,
    },
    namespace: {
        alias: "n",
        default: "*",
        describe: "The namespace to filter on",
        string: true,
    },
    quiet: {
        alias: "q",
        boolean: true,
        default: false,
        describe: "Only output uid's",
    },
};
