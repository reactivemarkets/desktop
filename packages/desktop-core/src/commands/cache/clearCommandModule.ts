import { CacheArea } from "./cacheArea";
import { handler } from "./clearCommandHandler";

export const command = "clear [area]";

export const describe = "Clear the cache and storage data";

export const builder = {
    area: {
        choices: Object.values(CacheArea),
        default: CacheArea.Http,
        describe: "The cache area",
    },
};

export { handler };
