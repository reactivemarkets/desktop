import { contextBridge } from "electron";
import { Registry } from "./registry";
import { GlobalShortcut } from "./globalShortcut";
import { Launcher } from "./launcher";
import { Logger } from "./logger";
import { Router } from "./router";
import { System } from "./system";
import { window } from "./window";
import { Screen } from "./screen";

contextBridge.exposeInMainWorld("desktop", {
    globalShortcut: new GlobalShortcut(),
    launcher: new Launcher(),
    logger: new Logger(),
    registry: new Registry(),
    router: new Router(),
    screen: new Screen(),
    system: new System(),
    window,
});
