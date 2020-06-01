import { IConfiguration } from "@reactivemarkets/desktop-types";
import { JsonConfigurationParser } from "./jsonConfigurationParser";
import { YamlConfigurationParser } from "./yamlConfigurationParser";

export * from "./iConfigurationParser";

export const jsonConfigurationParser = new JsonConfigurationParser<IConfiguration>();

export const yamlConfigurationParser = new YamlConfigurationParser<IConfiguration>();
