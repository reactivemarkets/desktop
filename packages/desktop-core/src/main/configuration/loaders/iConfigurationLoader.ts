export interface IConfigurationLoader<T> {
    canLoad(path: string): boolean;

    load(path: string): Promise<T[]>;
}
