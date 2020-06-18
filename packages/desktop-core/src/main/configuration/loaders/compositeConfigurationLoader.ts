import { IConfigurationLoader } from "./iConfigurationLoader";

export class CompositeConfigurationLoader<T> implements IConfigurationLoader<T> {
    private readonly loaders: Array<IConfigurationLoader<T>>;

    public constructor(...loaders: Array<IConfigurationLoader<T>>) {
        this.loaders = loaders;
    }

    public canLoad(path: string) {
        return this.loaders.some((loader) => loader.canLoad(path));
    }

    public load(path: string): Promise<T[]> {
        const loader = this.loaders.find((l) => l.canLoad(path));
        if (loader !== undefined) {
            return loader.load(path);
        }

        const error = new Error(`no loader found that could load: ${path}`);

        return Promise.reject(error);
    }
}
