export interface IConfigurationParser<T> {
    parse(data: string): T[];
    stringify(data: T): string;
}
