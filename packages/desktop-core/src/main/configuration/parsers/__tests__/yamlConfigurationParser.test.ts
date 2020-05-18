import { IConfiguration } from "../../iConfiguration";
import { YamlConfigurationParser } from "../yamlConfigurationParser";

describe("parse", () => {
    test("multiple documents", () => {
        const yaml = `
---
name: Application
---
name: Application 2`;

        const parser = new YamlConfigurationParser<{ name: string }>();

        expect(parser.parse(yaml)).toEqual([
            {
                name: "Application",
            },
            {
                name: "Application 2",
            },
        ]);
    });

    test("a document", () => {
        const yaml = `
---
name: Application`;

        const parser = new YamlConfigurationParser<{ name: string }>();

        expect(parser.parse(yaml)).toEqual([
            {
                name: "Application",
            },
        ]);
    });
});

describe("configuration", () => {
    test("parse", () => {
        const yaml = `
---
kind: application
metadata:
  name: My Application
spec:
  url: "http://analytics/embed/tile/signals-grid"
  window:
    alwaysOnTop: true
---
kind: service
metadata:
  name: Layout Service
spec:
  url: "http://localhost/layout"`;

        const parser = new YamlConfigurationParser<IConfiguration>();

        expect(parser.parse(yaml)).toEqual([
            {
                kind: "application",
                metadata: {
                    name: "My Application",
                },
                spec: {
                    url: "http://analytics/embed/tile/signals-grid",
                    window: {
                        alwaysOnTop: true,
                    },
                },
            },
            {
                kind: "service",
                metadata: {
                    name: "Layout Service",
                },
                spec: {
                    url: "http://localhost/layout",
                },
            },
        ]);
    });
});
