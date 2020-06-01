import * as yaml from "js-yaml";

import { IConfigurationParser } from "./iConfigurationParser";

export class YamlConfigurationParser<T> implements IConfigurationParser<T> {
    private readonly indentation: number;

    public constructor(indentation = 2) {
        this.indentation = indentation;
    }

    public parse = (data: string) => {
        return yaml.safeLoadAll(data) as T[];
    };

    public stringify = (data: T) => {
        return yaml.safeDump(data, {
            indent: this.indentation,
        });
    };
}
