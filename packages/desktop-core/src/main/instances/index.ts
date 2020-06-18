import { CompositeInstanceService } from "./compositeInstanceService";
import { WindowInstanceService } from "./windowInstanceService";
import { StorageInstanceService } from "./storageInstanceService";

export * from "./iInstanceService";

const windowInstanceService = new WindowInstanceService();
const storageInstanceService = new StorageInstanceService();

export const instanceService = new CompositeInstanceService(windowInstanceService, storageInstanceService);
