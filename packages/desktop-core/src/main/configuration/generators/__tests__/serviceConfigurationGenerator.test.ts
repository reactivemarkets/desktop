import { ConfigurationKind, WellKnownNamespaces } from "@reactivemarkets/desktop-types";
import { ServiceConfigurationGenerator } from "../serviceConfigurationGenerator";

describe("canGenerate", () => {
    describe("can generate for", () => {
        test("service", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Service)).toBe(true);
        });
    });

    describe("can't generator for", () => {
        test("application", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Application)).toBe(false);
        });

        test("external", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.External)).toBe(false);
        });
    });
});

describe("generate", () => {
    test("should generate service config", async () => {
        const generator = new ServiceConfigurationGenerator();

        const configuration = await generator.generate(ConfigurationKind.Service, "test");

        expect(configuration.kind).toBe(ConfigurationKind.Service);
    });

    test("should set namespace to default", async () => {
        const generator = new ServiceConfigurationGenerator();

        const configuration = await generator.generate(ConfigurationKind.Service, "test");

        expect(configuration.metadata.namespace).toBe(WellKnownNamespaces.default);
    });
});
