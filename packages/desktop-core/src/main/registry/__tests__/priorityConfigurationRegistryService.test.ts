import { mock } from "jest-mock-extended";

import { ConfigurationKind } from "../../configuration/configurationKind";
import { IConfiguration } from "../../configuration/iConfiguration";
import { IRegistryService } from "../iRegistryService";
import { PriorityConfigurationRegistryService } from "../priorityConfigurationRegistryService";

describe("getRegistry", () => {
    test("should be sorted", () => {
        const application: IConfiguration = {
            kind: ConfigurationKind.Application,
            metadata: {
                name: "application",
            },
            spec: {},
        };

        const session: IConfiguration = {
            kind: ConfigurationKind.Session,
            metadata: {
                name: "session",
            },
            spec: {},
        };

        const unsortedRegistry = mock<IRegistryService>();
        unsortedRegistry.getRegistry.mockReturnValue(
            Promise.resolve<IConfiguration[]>([application, session]),
        );

        const service = new PriorityConfigurationRegistryService(unsortedRegistry);

        const registry = service.getRegistry();

        return expect(registry).resolves.toEqual([session, application]);
    });
});
