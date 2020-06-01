import * as fs from "fs";
import * as util from "util";

import { IConfigurationParser } from "../parsers";
import { IConfigurationLoader } from "./iConfigurationLoader";

export class LocalFileConfigurationLoader<T> implements IConfigurationLoader<T> {
    private readonly encoding = "utf8";
    private readonly extensions: string[];
    private readonly parser: IConfigurationParser<T>;

    public constructor(parser: IConfigurationParser<T>, ...extensions: string[]) {
        this.extensions = extensions;
        this.parser = parser;
    }

    public canLoad(path: string) {
        return !path.startsWith("http") && this.extensions.some((ext) => path.endsWith(ext));
    }

    public async load(path: string): Promise<T[]> {
        const data = await util.promisify(fs.readFile)(path, this.encoding);

        return this.parser.parse(data);
    }
}
