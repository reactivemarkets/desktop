import { IConfiguration, ConfigurationKind } from "@reactivemarkets/desktop-types";
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

describe("stringify", () => {
    test("a document", () => {
        const json = `{"kind":"application","metadata":{"name":"test"},"spec":{"url":"https://url"}}`;

        const configuration: IConfiguration = {
            kind: ConfigurationKind.Application,
            metadata: {
                name: "test",
            },
            spec: {
                url: "https://url",
            },
        };

        const parser = new JsonConfigurationParser<IConfiguration>(0);

        const string = parser.stringify(configuration);

        expect(string).toEqual(json);
    });
});
