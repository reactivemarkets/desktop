import * as fs from "fs";
import * as util from "util";

import { IConfigurationParser } from "../parsers/iConfigurationParser";

import { IConfigurationWriter } from "./iConfigurationWriter";

export class LocalConfigurationWriter<T> implements IConfigurationWriter<T> {
    private readonly extensions: string[];
    private readonly parser: IConfigurationParser<T>;

    public constructor(parser: IConfigurationParser<T>, ...extensions: string[]) {
        this.parser = parser;
        this.extensions = extensions;
    }

    public canWrite(path: string) {
        return this.extensions.some((ext) => path.endsWith(ext));
    }

    public async write(path: string, data: T): Promise<void> {

        const dataString = this.parser.stringify(data);

        return util.promisify(fs.writeFile)(path, dataString);
    }
}
