import { CompositeStorageProvisioner } from "./compositeStorageProvisioner";
import { YamlLocalStorageProvisioner } from "./yamlLocalStorageProvisioner";

export * from "./iStorageClient";
export * from "./iStorageProvisioner";

const local = new YamlLocalStorageProvisioner();

export const storageProvisioner = new CompositeStorageProvisioner(local);
