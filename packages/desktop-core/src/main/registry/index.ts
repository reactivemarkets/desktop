import { ConfigurationRegistryService } from "./configurationRegistryService";
import { PriorityConfigurationRegistryService } from "./priorityConfigurationRegistryService";
import { EventEmittingRegistryService } from "./eventEmittingRegistryService";

const registry = new ConfigurationRegistryService();

const sortedRegistry = new PriorityConfigurationRegistryService(registry);

export const registryService = new EventEmittingRegistryService(sortedRegistry);
