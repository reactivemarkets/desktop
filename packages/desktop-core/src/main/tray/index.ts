import { ITrayService } from "./iTrayService";
import { DefaultTrayService } from "./defaultTrayService";
import { trayFactory } from "./factory";
import { uidGenerator } from "../ids";

export * from "./iTrayService";
export const trayService: ITrayService = new DefaultTrayService(trayFactory, uidGenerator);
