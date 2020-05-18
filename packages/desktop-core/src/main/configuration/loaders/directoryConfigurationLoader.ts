import * as fs from "fs";
import * as path from "path";
import * as util from "util";
import { IConfigurationLoader } from "./iConfigurationLoader";

export class DirectoryConfigurationLoader<T> implements IConfigurationLoader<T> {
    private readonly loader: IConfigurationLoader<T>;

    public constructor(loader: IConfigurationLoader<T>) {
        this.loader = loader;
    }

    public canLoad = (directoryPath: string) => {
        return !directoryPath.startsWith("http") && path.extname(directoryPath) === "";
    };

    public async load(directoryPath: string): Promise<T[]> {
        return util
            .promisify(fs.readdir)(directoryPath)
            .then(async (files) => {
                const configuration = files.map(async (file) => {
                    const filePath = path.join(directoryPath, file);

                    return this.loader.load(filePath);
                });

                return Promise.all(configuration);
            })
            .then((configurationFiles) => {
                return new Array<T>().concat(...configurationFiles);
            });
    }
}
