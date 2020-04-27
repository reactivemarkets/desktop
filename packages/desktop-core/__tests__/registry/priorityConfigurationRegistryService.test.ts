import { mock } from "jest-mock-extended";

import { ConfigurationKind } from "../../src/main/configuration/configurationKind";
import { IConfiguration } from "../../src/main/configuration/iConfiguration";
import { IRegistryService } from "../../src/main/registry/iRegistryService";
import { PriorityConfigurationRegistryService } from "../../src/main/registry/priorityConfigurationRegistryService";

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

        const unsortedRegistry = mock<IRegistryService>();
        unsortedRegistry.getRegistry.mockReturnValue(Promise.resolve<IConfiguration[]>([application, session]));

        const service = new PriorityConfigurationRegistryService(unsortedRegistry);

        const registry = service.getRegistry();

        expect(registry)
            .resolves
            .toEqual([session, application]);
    });
});
