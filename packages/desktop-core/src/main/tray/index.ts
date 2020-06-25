import { app } from "electron";
import * as path from "path";
import { logger } from "../logging";
import { shellService } from "../shell";
import { ITrayService } from "./iTrayService";
import { DefaultTrayService } from "./defaultTrayService";
import { windowService } from "../windowing";
import { DefaultTrayFactory } from "./factory";

const appPath = app.getAppPath();

let icon = "icon.png";
switch (process.platform) {
    case "darwin":
        icon = "MacTemplate.png";
        break;
    case "win32":
        icon = "desktop.ico";
        break;
}

const trayIcon = path.join(appPath, icon);

const defaultDocumentationUrl = "https://desktop.reactivemarkets.com";

const trayFactory = new DefaultTrayFactory({
    defaultIcon: trayIcon,
    defaultDocumentationUrl,
    logger,
    shellService,
    windowService,
});

export * from "./iTrayService";
export const trayService: ITrayService = new DefaultTrayService(trayFactory);
