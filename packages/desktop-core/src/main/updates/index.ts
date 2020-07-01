import { DefaultUpdateService } from "./defaultUpdateService";
import { IUpdateService } from "./iUpdateService";

export * from "./checkForSquirrelEvents";
export * from "./iUpdateService";

export const updateService: IUpdateService = new DefaultUpdateService();
