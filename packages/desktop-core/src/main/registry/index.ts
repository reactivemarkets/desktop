import { ConfigurationRegistryService } from "./configurationRegistryService";
import { PriorityConfigurationRegistryService } from "./priorityConfigurationRegistryService";
import { EventEmittingRegistryService } from "./eventEmittingRegistryService";
import { configurationKeyFunc } from "./configurationKeyFunc";
import { PreventOverrideConfigurationRegistryService } from "./preventOverrideConfigurationRegistryService";
import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";

const registry = new ConfigurationRegistryService(configurationKeyFunc);

const sortedRegistry = new PriorityConfigurationRegistryService(registry);

const noOverrides = new PreventOverrideConfigurationRegistryService(
    sortedRegistry,
    WellKnownConfigurationKind.ApplicationSecurityPolicy,
    WellKnownConfigurationKind.ExternalSecurityPolicy,
    WellKnownConfigurationKind.ServiceSecurityPolicy,
    WellKnownConfigurationKind.UpdatePolicy,
);

export const registryService = new EventEmittingRegistryService(noOverrides);
