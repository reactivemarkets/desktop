import { CompositeStorageProvisioner } from "./compositeStorageProvisioner";
import { YamlLocalStorageProvisioner } from "./yamlLocalStorageProvisioner";
import { TransientStorageProvisioner } from "./transientStorageProvisioner";

export * from "./iStorageClient";
export * from "./iStorageProvisioner";

const local = new YamlLocalStorageProvisioner();

const transient = new TransientStorageProvisioner();

export const storageProvisioner = new CompositeStorageProvisioner(local, transient);
