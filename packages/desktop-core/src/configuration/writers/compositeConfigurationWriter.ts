import { IConfigurationWriter } from "./iConfigurationWriter";

export class CompositeConfigurationWriter<T> implements IConfigurationWriter<T> {
    private readonly writers: Array<IConfigurationWriter<T>>;

    public constructor(...writers: Array<IConfigurationWriter<T>>) {
        this.writers = writers;
    }

    public canWrite(path: string) {

        return this
            .writers
            .some((writer) => writer.canWrite(path));
    }

    public async write(path: string, data: T) {

        const writer = this
            .writers
            .find((w) => w.canWrite(path));

        if (writer !== undefined) {
            return writer.write(path, data);
        }

        const error = new Error(`no writer found that could write to ${path}`);

        return Promise.reject(error);
    }
}
