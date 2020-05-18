import { BrowserWindow } from "electron";

import { IWindowConfiguration } from "../configuration";

export interface IWindowFactory {
    /**
     * Create a BrowserWindow from the given configuration.
     * @param configuration The window configuration
     */
    createWindow(configuration?: IWindowConfiguration): Promise<BrowserWindow>;
}
