import { IConfigurationParser } from "./iConfigurationParser";

export class JsonConfigurationParser<T> implements IConfigurationParser<T> {
    private readonly indentation: number;

    public constructor(indentation = 2) {
        this.indentation = indentation;
    }

    public parse = (data: string) => {
        return [JSON.parse(data) as T];
    };

    public stringify = (data: T) => {
        return JSON.stringify(data, undefined, this.indentation);
    };
}
