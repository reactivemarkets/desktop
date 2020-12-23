import { app } from "electron";
import * as path from "path";
import { BrowserWindowFactory } from "./browserWindowFactory";
import { CrashedWindowFactory } from "./crashedWindowFactory";
import { UnresponsiveWindowFactory } from "./unresponsiveWindowFactory";
import { FailedToLoadWindowFactory } from "./failedToLoadWindowFactory";
import { LinuxIconWindowFactory } from "./linuxIconWindowFactory";
import { ContentProtectionWindowFactory } from "./contentProtectionWindowFactory";
import { ContextMenuWindowFactory } from "./contextMenuWindowFactory";
import { defaultWebPreferences } from "./defaultWebPreferences";
import { CurrentScreenWindowFactory } from "./currentScreenWindowFactory";
import { logger } from "../../logging";

const appPath = app.getAppPath();

const preload = path.join(appPath, "preload.js");

const browserWindowFactory = new BrowserWindowFactory({
    ...defaultWebPreferences,
    preload,
});

const currentScreen = new CurrentScreenWindowFactory(browserWindowFactory, logger);

const contentProtection = new ContentProtectionWindowFactory(currentScreen);

const linuxIcon = path.join(appPath, "icon.png");

const linuxIconFactory = new LinuxIconWindowFactory(contentProtection, linuxIcon);

const crashedFactory = new CrashedWindowFactory(linuxIconFactory);

const failedToLoadFactory = new FailedToLoadWindowFactory(crashedFactory);

const unResponsiveWindowFactory = new UnresponsiveWindowFactory(failedToLoadFactory);

export const windowFactory = new ContextMenuWindowFactory(unResponsiveWindowFactory);

export * from "./iWindowFactory";
