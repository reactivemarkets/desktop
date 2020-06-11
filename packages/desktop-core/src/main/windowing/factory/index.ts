import { app } from "electron";
import * as path from "path";
import { BrowserWindowFactory } from "./browserWindowFactory";
import { CrashedWindowFactory } from "./crashedWindowFactory";
import { UnresponsiveWindowFactory } from "./unresponsiveWindowFactory";
import { FailedToLoadWindowFactory } from "./failedToLoadWindowFactory";

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
});

const crashedFactory = new CrashedWindowFactory(browserWindowFactory);

const failedToLoadFactory = new FailedToLoadWindowFactory(crashedFactory);

export const windowFactory = new UnresponsiveWindowFactory(failedToLoadFactory);
export * from "./iWindowFactory";
