import { configurationGenerator } from "../configuration/generators";
import { configurationLoader } from "../configuration/loaders";

import { ConfigurationRegistryService } from "./configurationRegistryService";
import { IRegistryService } from "./iRegistryService";
import { PriorityConfigurationRegistryService } from "./priorityConfigurationRegistryService";

const registry = new ConfigurationRegistryService(configurationLoader, configurationGenerator);

const sortedRegistry = new PriorityConfigurationRegistryService(registry);

export const registryService: IRegistryService = sortedRegistry;
