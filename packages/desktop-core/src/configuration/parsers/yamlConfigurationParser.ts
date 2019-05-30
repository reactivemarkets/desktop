import * as yaml from "js-yaml";

import { IConfigurationParser } from "./iConfigurationParser";

export class YamlConfigurationParser<T> implements IConfigurationParser<T> {

    public parse = (data: string) => {
        return yaml.safeLoadAll(data) as T[];
    }

    public stringify = (data: T) => {
        return yaml.safeDump(data);
    }
}
