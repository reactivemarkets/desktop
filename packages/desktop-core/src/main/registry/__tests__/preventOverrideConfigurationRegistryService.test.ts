import { IConfiguration } from "@reactivemarkets/desktop-types";
import { mock } from "jest-mock-extended";
import { IRegistryService } from "../iRegistryService";
import { PreventOverrideConfigurationRegistryService } from "../preventOverrideConfigurationRegistryService";

describe("getRegistry", () => {
    test("should delegate to underlying registry", () => {
        const registry = mock<IRegistryService>();
        registry.getRegistry.mockResolvedValue([]);

        const service = new PreventOverrideConfigurationRegistryService(registry);

        service.getRegistry();

        expect(registry.getRegistry.mock.calls.length).toBe(1);
    });
});

describe("includes", () => {
    test("should delegate to underlying registry", () => {
        const registry = mock<IRegistryService>();
        registry.includes.mockReturnValueOnce(false);

        const service = new PreventOverrideConfigurationRegistryService(registry);

        const configuration = mock<IConfiguration>();

        service.includes(configuration);

        expect(registry.includes.mock.calls.length).toBe(1);
    });
});

describe("register", () => {
    test("should register new configurations", () => {
        const registry = mock<IRegistryService>();
        registry.includes.mockReturnValue(false);
        registry.register.mockResolvedValue();

        const service = new PreventOverrideConfigurationRegistryService(registry);

        const configuration = mock<IConfiguration>();

        service.register(configuration);

        expect(registry.register.mock.calls.length).toBe(1);
    });

    test("should register already registered kind which is not restricted", () => {
        const registry = mock<IRegistryService>();
        registry.includes.mockReturnValue(true);
        registry.register.mockResolvedValue();

        const service = new PreventOverrideConfigurationRegistryService(registry, "kind");

        const configuration = mock<IConfiguration>({
            kind: "other",
        });

        service.register(configuration);

        expect(registry.register.mock.calls.length).toBe(1);
    });

    test("should throw on already registered kind", async () => {
        const registry = mock<IRegistryService>();
        registry.includes.mockReturnValue(true);
        registry.register.mockResolvedValue();

        const service = new PreventOverrideConfigurationRegistryService(registry, "kind");

        const configuration = mock<IConfiguration>({
            kind: "kind",
        });

        service.register(configuration);

        await expect(() => service.register(configuration)).rejects.toThrow();
    });
});

describe("unregister", () => {
    test("should delegate to underlying registry", () => {
        const registry = mock<IRegistryService>();
        registry.unregister.mockResolvedValue();

        const service = new PreventOverrideConfigurationRegistryService(registry);

        const configuration = mock<IConfiguration>();

        service.unregister(configuration);

        expect(registry.unregister.mock.calls.length).toBe(1);
    });
});
