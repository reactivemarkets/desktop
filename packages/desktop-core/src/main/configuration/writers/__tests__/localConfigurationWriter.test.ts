import { mock } from "jest-mock-extended";

import { IConfigurationParser } from "../../parsers/iConfigurationParser";
import { LocalConfigurationWriter } from "../localConfigurationWriter";

describe("canWrite", () => {
    describe("can write to", () => {
        test("specified extension", () => {
            const parser = mock<IConfigurationParser<{}>>();

            const writer = new LocalConfigurationWriter(parser, "yaml");

            expect(writer.canWrite("yaml")).toBe(true);
        });
    });

    describe("can't write to", () => {
        test("unspecified extension", () => {
            const parser = mock<IConfigurationParser<{}>>();

            const writer = new LocalConfigurationWriter(parser, "yaml");

            expect(writer.canWrite("xml")).toBe(false);
        });
    });
});
