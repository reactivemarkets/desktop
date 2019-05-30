import { ConfigurationKind } from "../../src/configuration/configurationKind";
import { IConfiguration } from "../../src/configuration/iConfiguration";
import { IRegistryService } from "../../src/registry/iRegistryService";
import { PriorityConfigurationRegistryService } from "../../src/registry/priorityConfigurationRegistryService";

describe("getRegistry", () => {

    test("should be sorted", () => {

        const application: IConfiguration = {
            kind: ConfigurationKind.Application,
            metadata: {
                name: "application",
            },
            spec: {

            },
        };

        const session: IConfiguration = {
            kind: ConfigurationKind.Session,
            metadata: {
                name: "session",
            },
            spec: {

            },
        };

        const unsortedRegistry = new (jest.fn<IRegistryService, string[]>(() => ({
            getRegistry: jest.fn(() => Promise.resolve<IConfiguration[]>([application, session])),
            registerConfig: jest.fn(),
            registerUrl: jest.fn(),
        })))();

        const service = new PriorityConfigurationRegistryService(unsortedRegistry);

        const registry = service.getRegistry();

        expect(registry)
            .resolves
            .toEqual([session, application]);
    });
});
