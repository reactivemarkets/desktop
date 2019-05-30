import { IConfiguration } from "../iConfiguration";

import { JsonConfigurationParser } from "./jsonConfigurationParser";
import { YamlConfigurationParser } from "./yamlConfigurationParser";

export const jsonConfigurationParser = new JsonConfigurationParser<IConfiguration>();

export const yamlConfigurationParser = new YamlConfigurationParser<IConfiguration>();
