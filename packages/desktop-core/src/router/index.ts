import { logger } from "../logging";
import { InProcessTransport } from "../transports";

import { DefaultRouterService } from "./defaultRouterService";
import { IRouterService } from "./iRouterService";
import { LoggingRouterService } from "./loggingRouterService";

const defaultRouterService = new DefaultRouterService();

const loggerRouterService = new LoggingRouterService(logger, defaultRouterService);

export const routerService: IRouterService = loggerRouterService;

routerService.addTransport(new InProcessTransport());
