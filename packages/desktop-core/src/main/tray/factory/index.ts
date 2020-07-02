import { app } from "electron";
import * as path from "path";
import { logger } from "../../logging";
import { shellService } from "../../shell";
import { windowService } from "../../windowing";
import { DefaultTrayFactory } from "./defaultTrayFactory";
import { BringToFrontTrayFactory } from "./bringToFrontTrayFactory";
export * from "./iTrayFactory";

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

const defaultTrayFactory = new DefaultTrayFactory({
    defaultIcon: trayIcon,
    defaultDocumentationUrl,
    logger,
    shellService,
    windowService,
});

export const trayFactory = new BringToFrontTrayFactory(defaultTrayFactory, windowService);
