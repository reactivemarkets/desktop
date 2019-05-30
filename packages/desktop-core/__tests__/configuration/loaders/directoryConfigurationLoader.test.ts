import { DirectoryConfigurationLoader } from "../../../src/configuration/loaders/directoryConfigurationLoader";
import { IConfigurationLoader } from "../../../src/configuration/loaders/iConfigurationLoader";

// tslint:disable:variable-name
describe("canLoad", () => {

    describe("can load from", () => {

        test("directory", () => {

            const fileLoader = new (jest.fn<IConfigurationLoader<{}>, string[]>())();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("/path/to/directory"))
                .toBe(true);
        });
    });

    describe("can't load from", () => {

        test("http", () => {

            const fileLoader = new (jest.fn<IConfigurationLoader<{}>, string[]>())();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("http://localhost/file.json"))
                .toBe(false);
        });

        test("https", () => {

            const fileLoader = new (jest.fn<IConfigurationLoader<{}>, string[]>())();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("https://localhost/file.yaml"))
                .toBe(false);
        });

        test("an extension", () => {

            const fileLoader = new (jest.fn<IConfigurationLoader<{}>, string[]>())();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("/path/to/file.ext"))
                .toBe(false);
        });
    });
});
