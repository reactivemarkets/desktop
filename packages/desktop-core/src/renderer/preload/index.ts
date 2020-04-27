import { contextBridge } from "electron";
import { window } from "./window";

contextBridge.exposeInMainWorld("desktop", {
    window,
});
