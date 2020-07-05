import { WellKnownConfigurationKind, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { ServiceConfigurationGenerator } from "../serviceConfigurationGenerator";

describe("canGenerate", () => {
    describe("can generate for", () => {
        test("service", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.Service)).toBe(true);
        });
    });

    describe("can't generator for", () => {
        test("application", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.Application)).toBe(false);
        });

        test("external", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.External)).toBe(false);
        });
    });
});

describe("generate", () => {
    test("should generate service config", async () => {
        const generator = new ServiceConfigurationGenerator();

        const configuration = await generator.generate({ kind: WellKnownConfigurationKind.Service, name: "test" });

        expect(configuration.kind).toBe(WellKnownConfigurationKind.Service);
    });

    test("should set namespace to default", async () => {
        const generator = new ServiceConfigurationGenerator();

        const configuration = await generator.generate({ kind: WellKnownConfigurationKind.Service, name: "test" });

        expect(configuration.metadata.namespace).toBe(WellKnownNamespace.default);
    });
});
