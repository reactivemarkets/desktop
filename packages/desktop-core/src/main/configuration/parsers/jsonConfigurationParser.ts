import { IConfigurationParser } from "./iConfigurationParser";

const jsonIndentation = 2;

export class JsonConfigurationParser<T> implements IConfigurationParser<T> {

    public parse = (data: string) => {
        return [JSON.parse(data) as T];
    }

    public stringify = (data: T) => {
        return JSON.stringify(data, undefined, jsonIndentation);
    }
}
