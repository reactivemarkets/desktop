import { IConfiguration } from "@reactivemarkets/desktop-types";
import { jsonConfigurationParser, yamlConfigurationParser } from "../parsers";

import { CompositeConfigurationWriter } from "./compositeConfigurationWriter";
import { IConfigurationWriter } from "./iConfigurationWriter";
import { LocalConfigurationWriter } from "./localConfigurationWriter";

const yamlConfigurationWriter = new LocalConfigurationWriter<IConfiguration>(yamlConfigurationParser, "yaml");

const jsonConfigurationWriter = new LocalConfigurationWriter<IConfiguration>(jsonConfigurationParser, "json");

export const configurationWriter: IConfigurationWriter<IConfiguration> = new CompositeConfigurationWriter(
    yamlConfigurationWriter,
    jsonConfigurationWriter,
);
