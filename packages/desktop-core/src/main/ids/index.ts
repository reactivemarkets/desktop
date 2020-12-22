import { IUidGenerator } from "./iUidGenerator";
export * from "./iUidGenerator";
import { NanoidUidGenerator } from "./nanoidUidGenerator";

export const uidGenerator: IUidGenerator = new NanoidUidGenerator();
