import { CacheArea } from "./cacheArea";
import { AuthType } from "./authType";

export { handler } from "./handler";

export const command = "clear [area]";

export const describe = "Clear the cache and storage data";

export const builder = {
    area: {
        choices: Object.values(CacheArea),
        default: CacheArea.Http,
        describe: "The cache area",
    },
    authType: {
        choices: Object.values(AuthType),
        default: AuthType.Password,
        describe: "The default auth type to clear",
    },
    partition: {
        describe: "A session instance identified by the partition",
        string: true,
    },
};
