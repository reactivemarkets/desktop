import { WebPreferences } from "electron";

export const defaultWebPreferences: WebPreferences = {
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
    safeDialogs: true,
    sandbox: true,
    spellcheck: true,
    textAreasAreResizable: false,
    webSecurity: true,
    webviewTag: false,
    worldSafeExecuteJavaScript: true,
};
