import { ApplicationConfigurationGenerator } from "./applicationConfigurationGenerator";
import { CompositeConfigurationGenerator } from "./compositeConfigurationGenerator";
import { ExternalConfigurationGenerator } from "./externalConfigurationGenerator";
import { IConfigurationGenerator } from "./iConfigurationGenerator";
import { ServiceConfigurationGenerator } from "./serviceConfigurationGenerator";
import { ProtocolResolvingConfigurationGenerator } from "./protocolResolvingConfigurationGenerator";

const applicationGenerator = new ApplicationConfigurationGenerator();

const protocolResolvingGenerator = new ProtocolResolvingConfigurationGenerator(applicationGenerator);

const externalGenerator = new ExternalConfigurationGenerator();

const serviceGenerator = new ServiceConfigurationGenerator();

export const configurationGenerator: IConfigurationGenerator = new CompositeConfigurationGenerator(
    protocolResolvingGenerator,
    externalGenerator,
    serviceGenerator,
);
