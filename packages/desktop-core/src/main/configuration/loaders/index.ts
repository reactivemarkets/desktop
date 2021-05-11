import { IConfiguration } from "@reactivemarkets/desktop-types";
import { jsonConfigurationParser, yamlConfigurationParser } from "../parsers";

import { CompositeConfigurationLoader } from "./compositeConfigurationLoader";
import { DirectoryConfigurationLoader } from "./directoryConfigurationLoader";
import { IConfigurationLoader } from "./iConfigurationLoader";
import { LocalFileConfigurationLoader } from "./localFileConfigurationLoader";
import { RemoteFileConfigurationLoader } from "./remoteFileConfigurationLoader";

const localJsonConfigurationLoader = new LocalFileConfigurationLoader<IConfiguration>(jsonConfigurationParser, "json");

const localYamlConfigurationLoader = new LocalFileConfigurationLoader<IConfiguration>(
    yamlConfigurationParser,
    "yaml",
    "yml",
);

const localConfigurationLoader = new CompositeConfigurationLoader(
    localYamlConfigurationLoader,
    localJsonConfigurationLoader,
);

const directoryConfigurationLoader = new DirectoryConfigurationLoader(localConfigurationLoader);

const remoteJsonConfigurationLoader = new RemoteFileConfigurationLoader<IConfiguration>(
    jsonConfigurationParser,
    "",
    "json",
);

const remoteYamlConfigurationLoader = new RemoteFileConfigurationLoader<IConfiguration>(
    yamlConfigurationParser,
    "yaml",
    "yml",
);

export const configurationLoader: IConfigurationLoader<IConfiguration> =
    new CompositeConfigurationLoader<IConfiguration>(
        localYamlConfigurationLoader,
        remoteYamlConfigurationLoader,
        directoryConfigurationLoader,
        localJsonConfigurationLoader,
        remoteJsonConfigurationLoader,
    );
