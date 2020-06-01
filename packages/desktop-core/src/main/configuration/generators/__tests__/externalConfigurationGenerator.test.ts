import { ConfigurationKind, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { ExternalConfigurationGenerator } from "../externalConfigurationGenerator";

describe("canGenerate", () => {
    describe("can generate for", () => {
        test("external", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.External)).toBe(true);
        });
    });

    describe("can't generator for", () => {
        test("application", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Application)).toBe(false);
        });

        test("service", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Service)).toBe(false);
        });
    });
});

describe("generate", () => {
    test("should generate external config", async () => {
        const generator = new ExternalConfigurationGenerator();

        const configuration = await generator.generate(ConfigurationKind.External, "test");

        expect(configuration.kind).toBe(ConfigurationKind.External);
    });

    test("should set namespace to default", async () => {
        const generator = new ExternalConfigurationGenerator();

        const configuration = await generator.generate(ConfigurationKind.External, "test");

        expect(configuration.metadata.namespace).toBe(WellKnownNamespaces.default);
    });
});
