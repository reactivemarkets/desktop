import { customAlphabet } from "nanoid";
import { IUidGenerator } from "./iUidGenerator";

export class NanoidUidGenerator implements IUidGenerator {
    private readonly nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", 22);

    public generate(): string {
        return this.nanoid();
    }
}
