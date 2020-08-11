import { app } from "electron";
import * as path from "path";
import { BrowserWindowFactory } from "./browserWindowFactory";
import { CrashedWindowFactory } from "./crashedWindowFactory";
import { UnresponsiveWindowFactory } from "./unresponsiveWindowFactory";
import { FailedToLoadWindowFactory } from "./failedToLoadWindowFactory";
import { LinuxIconWindowFactory } from "./linuxIconWindowFactory";
import { ContentProtectionWindowFactory } from "./contentProtectionWindowFactory";
import { ContextMenuWindowFactory } from "./contextMenuWindowFactory";

const appPath = app.getAppPath();

const preload = path.join(appPath, "preload.js");

const browserWindowFactory = new BrowserWindowFactory({
    allowRunningInsecureContent: false,
    contextIsolation: true,
    devTools: true,
    enableRemoteModule: false,
    enableWebSQL: false,
    experimentalFeatures: false,
    navigateOnDragDrop: false,
    nodeIntegration: false,
    nodeIntegrationInSubFrames: false,
    nodeIntegrationInWorker: false,
    plugins: false,
    preload,
    safeDialogs: true,
    sandbox: true,
    spellcheck: true,
    textAreasAreResizable: false,
    webSecurity: true,
    webviewTag: false,
    worldSafeExecuteJavaScript: true,
});

const contentProtection = new ContentProtectionWindowFactory(browserWindowFactory);

const linuxIcon = path.join(appPath, "icon.png");

const linuxIconFactory = new LinuxIconWindowFactory(contentProtection, linuxIcon);

const crashedFactory = new CrashedWindowFactory(linuxIconFactory);

const failedToLoadFactory = new FailedToLoadWindowFactory(crashedFactory);

const unResponsiveWindowFactory = new UnresponsiveWindowFactory(failedToLoadFactory);

export const windowFactory = new ContextMenuWindowFactory(unResponsiveWindowFactory);

export * from "./iWindowFactory";
