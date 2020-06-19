import { DefaultWindowService } from "./defaultWindowService";
import { IWindowService } from "./iWindowService";
import { EventEmittingWindowService } from "./eventEmittingWindowService";
import { windowFactory } from "./factory";
import { SingleInstanceWindowService } from "./singleInstanceWindowService";
import { logger } from "../logging";

export * from "./iWindowService";

const defaultWindowService = new DefaultWindowService(windowFactory);

const singleInstanceWindowService = new SingleInstanceWindowService(logger, defaultWindowService);

export const windowService: IWindowService = new EventEmittingWindowService(singleInstanceWindowService);
