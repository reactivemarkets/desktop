import { app } from "electron";
import * as path from "path";
import { BrowserWindowFactory } from "./browserWindowFactory";
import { DefaultWindowService } from "./defaultWindowService";
import { IWindowService } from "./iWindowService";
import { CrashedWindowService } from "./crashedWindowService";
import { UnresponsiveWindowService } from "./unresponsiveWindowService";
import { FailedToLoadWindowService } from "./failedToLoadWindowService";

export * from "./iWindowService";

const appPath = app.getAppPath();

const preload = path.join(appPath, "preload.js");

const windowFactory = new BrowserWindowFactory({
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

const defaultService = new DefaultWindowService(windowFactory);

const crashedService = new CrashedWindowService(defaultService);

const failedToLoadService = new FailedToLoadWindowService(crashedService);

export const windowService: IWindowService = new UnresponsiveWindowService(failedToLoadService);
