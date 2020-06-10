import { AuthType } from "./authType";
import { CacheArea } from "./cacheArea";

export interface IClearOptions {
    readonly area: CacheArea;
    readonly authType: AuthType;
    readonly partition?: string;
}
