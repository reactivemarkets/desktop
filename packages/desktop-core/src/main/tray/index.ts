import { app } from "electron";
import * as path from "path";
import { logger } from "../logging";
import { ITrayService } from "./iTrayService";
import { DefaultTrayService } from "./defaultTrayService";

const appPath = app.getAppPath();

const icon = process.platform === "darwin" ? "MacTemplate.png" : "desktop.ico";

const trayIcon = path.join(appPath, icon);

const defaultDocumentationUrl = "https://desktop.reactivemarkets.com";

export * from "./iTrayService";
export const trayService: ITrayService = new DefaultTrayService(logger, trayIcon, defaultDocumentationUrl);
