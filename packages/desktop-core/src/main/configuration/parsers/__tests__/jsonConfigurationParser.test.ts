import { JsonConfigurationParser } from "../jsonConfigurationParser";

describe("parse", () => {
    test("a document", () => {
        const json = '{ "name": "Application" }';

        const parser = new JsonConfigurationParser<{ name: string }>();

        expect(parser.parse(json)).toEqual([
            {
                name: "Application",
            },
        ]);
    });
});
