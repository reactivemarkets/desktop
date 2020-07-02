import { ITrayService } from "./iTrayService";
import { DefaultTrayService } from "./defaultTrayService";
import { trayFactory } from "./factory";

export * from "./iTrayService";
export const trayService: ITrayService = new DefaultTrayService(trayFactory);
