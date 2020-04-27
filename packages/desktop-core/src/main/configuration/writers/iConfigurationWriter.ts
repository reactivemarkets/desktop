export interface IConfigurationWriter<T> {
    canWrite(path: string): boolean;
    write(path: string, data: T): Promise<void>;
}
