import { JsonConfigurationParser } from "../../../src/configuration/parsers/jsonConfigurationParser";

describe("parse", () => {

    test("a document", () => {
        const json = "{ \"name\": \"Application\" }";

        const parser = new JsonConfigurationParser<{ name: string }>();

        expect(parser.parse(json))
            .toEqual([
                {
                    name: "Application",
                },
            ]);
    });
});
