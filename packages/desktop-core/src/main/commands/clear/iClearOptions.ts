import { CacheArea } from "./cacheArea";

export interface IClearOptions {
    readonly area: CacheArea;
    readonly partition?: string;
}
