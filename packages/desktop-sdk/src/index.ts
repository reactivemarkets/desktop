import { DesktopClient } from "./desktopClient";
import { DesktopWindowClient } from "./desktopWindowClient";
import { GlobalShortcutClient } from "./globalShortcutClient";
import { LoggerClient } from "./loggerClient";
import { RouterClient } from "./routerClient";
import { RegistryClient } from "./registryClient";
import { LauncherClient } from "./launcherClient";

export * from "@reactivemarkets/desktop-types";

export * from "./iDesktop";
export * from "./iGlobalShortcut";
export * from "./iLogger";
export * from "./iRouter";
export * from "./iDesktopWindow";
export * from "./Rectangle";

export const desktop = new DesktopClient();
export const globalShortcut = new GlobalShortcutClient(desktop);
export const launcher = new LauncherClient(desktop);
export const logger = new LoggerClient(desktop);
export const registry = new RegistryClient(desktop);
export const router = new RouterClient(desktop);
export const window = new DesktopWindowClient(desktop);
