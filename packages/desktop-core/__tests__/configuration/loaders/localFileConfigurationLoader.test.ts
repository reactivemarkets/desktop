import { mock } from "jest-mock-extended";

import { LocalFileConfigurationLoader } from "../../../src/configuration/loaders/localFileConfigurationLoader";
import { IConfigurationParser } from "../../../src/configuration/parsers/iConfigurationParser";

describe("canLoad", () => {

    describe("can load from", () => {

        test("extension", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("file.yaml"))
                .toBe(true);
        });

        test("a local file", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("file:///c:/file.yaml"))
                .toBe(true);
        });

        test("a network file", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("\\\\machine\\folder\\file.yaml"))
                .toBe(true);
        });
    });

    describe("can't load from", () => {

        test("http", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new LocalFileConfigurationLoader(parser, "json");

            expect(loader.canLoad("http://localhost/file.json"))
                .toBe(false);
        });

        test("https", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("https://localhost/file.yaml"))
                .toBe(false);
        });

        test("an unknown extension", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new LocalFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("https://localhost/file.txt"))
                .toBe(false);
        });
    });
});
