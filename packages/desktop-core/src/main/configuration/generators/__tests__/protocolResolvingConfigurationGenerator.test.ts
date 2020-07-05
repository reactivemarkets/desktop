import { WellKnownConfigurationKind, IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { mock } from "jest-mock-extended";
import { ApplicationConfigurationGenerator } from "../applicationConfigurationGenerator";
import { ProtocolResolvingConfigurationGenerator } from "../protocolResolvingConfigurationGenerator";
import { IConfigurationGenerator } from "../iConfigurationGenerator";

describe("canGenerate", () => {
    test("should delegate to underlying generator", () => {
        const generator = mock<IConfigurationGenerator>();
        generator.canGenerate.mockReturnValue(true);

        const protocol = new ProtocolResolvingConfigurationGenerator(generator);

        expect(protocol.canGenerate(WellKnownConfigurationKind.Application)).toBe(true);
        expect(generator.canGenerate.mock.calls.length).toBe(1);
    });
});

describe("generate", () => {
    test.each`
        url                              | expected
        ${"reactivemarkets.com"}         | ${"https://reactivemarkets.com"}
        ${"www.reactivemarkets.com"}     | ${"https://www.reactivemarkets.com"}
        ${"http://reactivemarkets.com/"} | ${"http://reactivemarkets.com/"}
        ${"http://reactivemarkets.com"}  | ${"http://reactivemarkets.com"}
    `("should normalize $url to $expected", async ({ url, expected }) => {
        const generator = new ApplicationConfigurationGenerator();

        const protocol = new ProtocolResolvingConfigurationGenerator(generator);

        const configuration = await protocol.generate({
            kind: WellKnownConfigurationKind.Application,
            name: "name",
            url,
        });

        const application = configuration.spec as IApplicationSpecification;

        expect(application.url).toBe(expected);
    });
});
