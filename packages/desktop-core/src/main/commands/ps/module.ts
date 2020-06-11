export { handler } from "./handler";

export const command = "ps";

export const describe = "List instances";

export const builder = {
    kind: {
        alias: "k",
        description: "The instance kind",
        string: true,
    },
    namespace: {
        alias: "n",
        default: "*",
        describe: "The namespace to filter on",
        string: true,
    },
};
