import { CompositeInstanceService } from "./compositeInstanceService";
import { WindowInstanceService } from "./windowInstanceService";

export * from "./iInstanceService";

const windowInstanceService = new WindowInstanceService();

export const instanceService = new CompositeInstanceService(windowInstanceService);
