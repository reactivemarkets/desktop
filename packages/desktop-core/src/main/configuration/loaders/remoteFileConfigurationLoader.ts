import fetch from "electron-fetch";

import { IConfigurationParser } from "../parsers";
import { IConfigurationLoader } from "./iConfigurationLoader";

export class RemoteFileConfigurationLoader<T> implements IConfigurationLoader<T> {
    private readonly extensions: string[];
    private readonly parser: IConfigurationParser<T>;

    public constructor(parser: IConfigurationParser<T>, ...extensions: string[]) {
        this.extensions = extensions;
        this.parser = parser;
    }

    public canLoad(path: string) {
        return path.startsWith("http") && this.extensions.some((ext) => path.endsWith(ext));
    }

    public async load(path: string): Promise<T[]> {
        const response = await fetch(path);

        if (!response.ok) {
            throw Error(`Request failed with ${response.status}: ${response.statusText}`);
        }

        const data = await response.text();

        return this.parser.parse(data);
    }
}
