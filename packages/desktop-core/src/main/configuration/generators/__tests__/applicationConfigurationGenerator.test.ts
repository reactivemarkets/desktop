import { ConfigurationKind, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { ApplicationConfigurationGenerator } from "../applicationConfigurationGenerator";

describe("canGenerate", () => {
    describe("can generate for", () => {
        test("application", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Application)).toBe(true);
        });
    });

    describe("can't generator for", () => {
        test("external", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.External)).toBe(false);
        });

        test("service", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Service)).toBe(false);
        });
    });
});

describe("generate", () => {
    test("should generate application config", async () => {
        const generator = new ApplicationConfigurationGenerator();

        const configuration = await generator.generate(ConfigurationKind.Application, "test", "http://url");

        expect(configuration.kind).toBe(ConfigurationKind.Application);
    });

    test("should set namespace to default", async () => {
        const generator = new ApplicationConfigurationGenerator();

        const configuration = await generator.generate(ConfigurationKind.Application, "test", "http://url");

        expect(configuration.metadata.namespace).toBe(WellKnownNamespaces.default);
    });
});
