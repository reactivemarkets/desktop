import { contextBridge } from "electron";

import { Registry } from "./registry";
import { GlobalShortcut } from "./globalShortcut";
import { Launcher } from "./launcher";
import { Logger } from "./logger";
import { Router } from "./router";
import { System } from "./system";
import { window } from "./window";

contextBridge.exposeInMainWorld("desktop", {
    globalShortcut: new GlobalShortcut(),
    launcher: new Launcher(),
    logger: new Logger(),
    registry: new Registry(),
    router: new Router(),
    system: new System(),
    window,
});
