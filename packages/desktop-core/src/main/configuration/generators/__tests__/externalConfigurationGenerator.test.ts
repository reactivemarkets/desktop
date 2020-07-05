import { WellKnownConfigurationKind, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { ExternalConfigurationGenerator } from "../externalConfigurationGenerator";

describe("canGenerate", () => {
    describe("can generate for", () => {
        test("external", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.External)).toBe(true);
        });
    });

    describe("can't generator for", () => {
        test("application", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.Application)).toBe(false);
        });

        test("service", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.Service)).toBe(false);
        });
    });
});

describe("generate", () => {
    test("should generate external config", async () => {
        const generator = new ExternalConfigurationGenerator();

        const configuration = await generator.generate({ kind: WellKnownConfigurationKind.External, name: "test" });

        expect(configuration.kind).toBe(WellKnownConfigurationKind.External);
    });

    test("should set namespace to default", async () => {
        const generator = new ExternalConfigurationGenerator();

        const configuration = await generator.generate({ kind: WellKnownConfigurationKind.External, name: "test" });

        expect(configuration.metadata.namespace).toBe(WellKnownNamespace.default);
    });
});
