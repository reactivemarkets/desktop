import { CompositeStorageProvisioner } from "./provisioners/compositeStorageProvisioner";
import { YamlLocalStorageProvisioner } from "./provisioners/yamlLocalStorageProvisioner";
import { TransientStorageProvisioner } from "./provisioners/transientStorageProvisioner";
import { DefaultStorageService } from "./defaultStorageService";
import { uidGenerator } from "../ids";

export * from "./iStorageClient";
export * from "./iStorageProvisioner";
export * from "./iStorageService";

const local = new YamlLocalStorageProvisioner();

const transient = new TransientStorageProvisioner();

export const storageProvisioner = new CompositeStorageProvisioner(local, transient);

export const storageService = new DefaultStorageService(storageProvisioner, uidGenerator);
