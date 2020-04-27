import { ApplicationConfigurationGenerator } from "./applicationConfigurationGenerator";
import { CompositeConfigurationGenerator } from "./compositeConfigurationGenerator";
import { ExternalConfigurationGenerator } from "./externalConfigurationGenerator";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { ServiceConfigurationGenerator } from "./serviceConfigurationGenerator";

const applicationConfigurationGenerator = new ApplicationConfigurationGenerator();

const externalConfigurationGenerator = new ExternalConfigurationGenerator();

const serviceConfigurationGenerator = new ServiceConfigurationGenerator();

export const configurationGenerator: IConfigurationGenerator = new CompositeConfigurationGenerator(applicationConfigurationGenerator,
                                                                                                   externalConfigurationGenerator,
                                                                                                   serviceConfigurationGenerator);
