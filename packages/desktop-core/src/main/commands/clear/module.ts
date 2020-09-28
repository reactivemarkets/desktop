import { CacheArea } from "./cacheArea";

export { handler } from "./handler";

export const command = "clear [area]";

export const describe = "Clear the cache and storage data";

export const builder = {
    area: {
        choices: Object.values(CacheArea),
        default: CacheArea.Http,
        describe: "The cache area",
    },
    partition: {
        describe: "A session instance identified by the partition",
        string: true,
    },
};
