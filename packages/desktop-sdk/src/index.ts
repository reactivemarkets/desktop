import { DesktopClient } from "./desktopClient";
import { DesktopWindowClient } from "./desktopWindowClient";
import { GlobalShortcutClient } from "./globalShortcutClient";
import { LoggerClient } from "./loggerClient";
import { RouterClient } from "./routerClient";
import { RegistryClient } from "./registryClient";
import { LauncherClient } from "./launcherClient";
import { IDesktop } from "./iDesktop";
import { IGlobalShortcut } from "./iGlobalShortcut";
import { ILauncher } from "./iLauncher";
import { ILogger } from "./iLogger";
import { IRouter } from "./iRouter";
import { IScreen } from "./iScreen";
import { ScreenClient } from "./screenClient";
import { IDesktopWindowClient } from "./iDesktopWindowClient";

export * from "@reactivemarkets/desktop-types";

export * from "./iDesktop";
export * from "./iDesktopVersions";
export * from "./iDesktopWindow";
export * from "./iDesktopWindowClient";
export * from "./iDisplay";
export * from "./iGlobalShortcut";
export * from "./iLauncher";
export * from "./iLogger";
export * from "./iPoint";
export * from "./iRectangle";
export * from "./iRegistry";
export * from "./iRouter";
export * from "./iScreen";

export const desktop: IDesktop = new DesktopClient();
export const globalShortcut: IGlobalShortcut = new GlobalShortcutClient(desktop);
export const launcher: ILauncher = new LauncherClient(desktop);
export const logger: ILogger = new LoggerClient(desktop);
export const registry = new RegistryClient(desktop);
export const router: IRouter = new RouterClient(desktop);
export const screen: IScreen = new ScreenClient(desktop);
export const window: IDesktopWindowClient = new DesktopWindowClient(desktop);
