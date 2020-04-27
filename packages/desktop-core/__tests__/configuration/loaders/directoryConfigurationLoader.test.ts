import { mock } from "jest-mock-extended";

import { DirectoryConfigurationLoader } from "../../../src/main/configuration/loaders/directoryConfigurationLoader";
import { IConfigurationLoader } from "../../../src/main/configuration/loaders/iConfigurationLoader";

describe("canLoad", () => {

    describe("can load from", () => {

        test("directory", () => {

            const fileLoader = mock<IConfigurationLoader<{}>>();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("/path/to/directory"))
                .toBe(true);
        });
    });

    describe("can't load from", () => {

        test("http", () => {

            const fileLoader = mock<IConfigurationLoader<{}>>();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("http://localhost/file.json"))
                .toBe(false);
        });

        test("https", () => {

            const fileLoader = mock<IConfigurationLoader<{}>>();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("https://localhost/file.yaml"))
                .toBe(false);
        });

        test("an extension", () => {

            const fileLoader = mock<IConfigurationLoader<{}>>();

            const loader = new DirectoryConfigurationLoader(fileLoader);

            expect(loader.canLoad("/path/to/file.ext"))
                .toBe(false);
        });
    });
});
