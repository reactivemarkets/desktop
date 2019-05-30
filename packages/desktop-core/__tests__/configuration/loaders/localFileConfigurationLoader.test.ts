import { LocalFileConfigurationLoader } from "../../../src/configuration/loaders/localFileConfigurationLoader";
import { IConfigurationParser } from "../../../src/configuration/parsers/iConfigurationParser";

// tslint:disable:variable-name
describe("canLoad", () => {

    describe("can load from", () => {

        test("extension", () => {

            const parser = new (jest.fn<IConfigurationParser<{}>, string[]>())();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("file.yaml"))
                .toBe(true);
        });

        test("a local file", () => {

            const parser = new (jest.fn<IConfigurationParser<{}>, string[]>())();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("file:///c:/file.yaml"))
                .toBe(true);
        });

        test("a network file", () => {

            const parser = new (jest.fn<IConfigurationParser<{}>, string[]>())();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("\\\\machine\\folder\\file.yaml"))
                .toBe(true);
        });
    });

    describe("can't load from", () => {

        test("http", () => {

            const parser = new (jest.fn<IConfigurationParser<{}>, string[]>())();

            const loader = new LocalFileConfigurationLoader(parser, "json");

            expect(loader.canLoad("http://localhost/file.json"))
                .toBe(false);
        });

        test("https", () => {

            const parser = new (jest.fn<IConfigurationParser<{}>, string[]>())();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("https://localhost/file.yaml"))
                .toBe(false);
        });

        test("an unknown extension", () => {

            const parser = new (jest.fn<IConfigurationParser<{}>, string[]>())();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("https://localhost/file.txt"))
                .toBe(false);
        });
    });
});
