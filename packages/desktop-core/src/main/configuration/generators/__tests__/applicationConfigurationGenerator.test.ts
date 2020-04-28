import { ConfigurationKind } from "../../configurationKind";
import { ApplicationConfigurationGenerator } from "../applicationConfigurationGenerator";

describe("canGenerate", () => {

    describe("can generate for", () => {

        test("application", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Application))
                .toBe(true);
        });
    });

    describe("can't generator for", () => {

        test("external", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.External))
                .toBe(false);
        });

        test("service", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Service))
                .toBe(false);
        });
    });
});
