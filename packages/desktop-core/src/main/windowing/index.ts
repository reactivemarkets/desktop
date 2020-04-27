import { app } from "electron";
import * as path from "path";
import { BrowserWindowFactory } from "./browserWindowFactory";
import { DefaultWindowService } from "./defaultWindowService";
import { IWindowService } from "./iWindowService";

export * from "./iWindowService";

const appPath = app.getAppPath();

const preload = path.join(appPath, "preload.js");

const windowFactory = new BrowserWindowFactory(preload);

export const windowService: IWindowService = new DefaultWindowService(windowFactory);
