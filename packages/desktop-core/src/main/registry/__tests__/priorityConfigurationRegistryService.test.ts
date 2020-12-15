import { IConfiguration, WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { mock } from "jest-mock-extended";
import { IRegistryService } from "../iRegistryService";
import { PriorityConfigurationRegistryService } from "../priorityConfigurationRegistryService";

describe("getRegistry", () => {
    test("should be sorted", () => {
        const application: IConfiguration = {
            kind: WellKnownConfigurationKind.Application,
            metadata: {
                name: "application",
            },
            spec: {},
        };

        const session: IConfiguration = {
            kind: WellKnownConfigurationKind.Session,
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

describe("includes", () => {
    test("should delegate to underlying registry", () => {
        const registry = mock<IRegistryService>();
        registry.includes.mockReturnValueOnce(false);

        const service = new PriorityConfigurationRegistryService(registry);

        const configuration = mock<IConfiguration>();

        service.includes(configuration);

        expect(registry.includes.mock.calls.length).toBe(1);
    });
});

describe("register", () => {
    test("should delegate to underlying registry", () => {
        const registry = mock<IRegistryService>();
        registry.register.mockResolvedValue();

        const service = new PriorityConfigurationRegistryService(registry);

        const configuration = mock<IConfiguration>();

        service.register(configuration);

        expect(registry.register.mock.calls.length).toBe(1);
    });
});

describe("unregister", () => {
    test("should delegate to underlying registry", () => {
        const registry = mock<IRegistryService>();
        registry.unregister.mockResolvedValue();

        const service = new PriorityConfigurationRegistryService(registry);

        const configuration = mock<IConfiguration>();

        service.unregister(configuration);

        expect(registry.unregister.mock.calls.length).toBe(1);
    });
});
