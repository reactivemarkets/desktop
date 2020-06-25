import { CompositeInstanceService } from "./compositeInstanceService";
import { WindowInstanceService } from "./windowInstanceService";
import { StorageInstanceService } from "./storageInstanceService";
import { TrayInstanceService } from "./trayInstanceService";

export * from "./iInstanceService";

const windowInstanceService = new WindowInstanceService();
const storageInstanceService = new StorageInstanceService();
const trayInstanceService = new TrayInstanceService();

export const instanceService = new CompositeInstanceService(
    windowInstanceService,
    storageInstanceService,
    trayInstanceService,
);
