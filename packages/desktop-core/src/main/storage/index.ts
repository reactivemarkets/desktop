import { CompositeStorageProvisioner } from "./compositeStorageProvisioner";
import { YamlLocalStorageProvisioner } from "./yamlLocalStorageProvisioner";
import { TransientStorageProvisioner } from "./transientStorageProvisioner";
import { DefaultStorageService } from "./defaultStorageService";

export * from "./iStorageClient";
export * from "./iStorageProvisioner";
export * from "./iStorageService";

const local = new YamlLocalStorageProvisioner();

const transient = new TransientStorageProvisioner();

export const storageProvisioner = new CompositeStorageProvisioner(local, transient);

export const storageService = new DefaultStorageService(storageProvisioner);
