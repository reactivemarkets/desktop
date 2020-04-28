import { contextBridge } from "electron";
import { globalShortcut } from "./globalShortcut";
import { window } from "./window";

contextBridge.exposeInMainWorld("desktop", {
    globalShortcut,
    window,
});
