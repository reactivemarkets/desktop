import { mock } from "jest-mock-extended";

import { RemoteFileConfigurationLoader } from "../../../src/main/configuration/loaders/remoteFileConfigurationLoader";
import { IConfigurationParser } from "../../../src/main/configuration/parsers/iConfigurationParser";

describe("canLoad", () => {

    describe("can load from", () => {

        test("http", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new RemoteFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("http://localhost/file.yaml"))
                .toBe(true);
        });

        test("https", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new RemoteFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("https://localhost/file.yaml"))
                .toBe(true);
        });
    });

    describe("can't load from", () => {

        test("a local file", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new RemoteFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("file:///c:/file.yaml"))
                .toBe(false);
        });
        test("a network file", () => {

            const parser = mock<IConfigurationParser<{}>>();

            const loader = new RemoteFileConfigurationLoader(parser, "yaml");

            expect(loader.canLoad("\\\\machine\\file.yaml"))
                .toBe(false);
        });
    });
});
