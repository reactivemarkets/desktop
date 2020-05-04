import { DesktopClient } from "./desktopClient";
import { DesktopWindowClient } from "./desktopWindowClient";
import { GlobalShortcutClient } from "./globalShortcutClient";
import { IDesktopWindowClient } from "./iDesktopWindowClient";
import { IGlobalShortcut } from "./iGlobalShortcut";
import { ILogger } from "./iLogger";
import { IRouter } from "./iRouter";
import { LoggerClient } from "./loggerClient";
import { RouterClient } from "./routerClient";

export * from "./iDesktop";
export * from "./iGlobalShortcut";
export * from "./iLogger";
export * from "./iRouter";
export * from "./iDesktopWindow";
export * from "./Rectangle";

export const desktopClient = new DesktopClient();
export const globalShortcut: IGlobalShortcut = new GlobalShortcutClient(desktopClient);
export const logger: ILogger = new LoggerClient(desktopClient);
export const router: IRouter = new RouterClient(desktopClient);
export const window: IDesktopWindowClient = new DesktopWindowClient(desktopClient);
