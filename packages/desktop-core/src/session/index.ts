import { logger } from "../logging";

import { DefaultSessionService } from "./defaultSessionService";
import { ISessionService } from "./iSessionService";

export * from "./iSessionService";
export const sessionService: ISessionService = new DefaultSessionService(logger);
