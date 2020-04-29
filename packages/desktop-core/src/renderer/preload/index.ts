import { contextBridge } from "electron";

import { globalShortcut } from "./globalShortcut";
import { logger } from "./logger";
import { router } from "./router";
import { window } from "./window";

contextBridge.exposeInMainWorld("desktop", {
    globalShortcut,
    logger,
    router,
    window,
});
