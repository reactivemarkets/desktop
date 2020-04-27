import { BrowserWindow } from "electron";

import { IWindowConfiguration } from "../configuration";

export interface IWindowService {

    /**
     * Get all current windows.
     */
    allWindows(): BrowserWindow[];

    /**
     * Get a specific window.
     *
     * @param id the window identifier
     */
    getWindow(id: number): BrowserWindow | undefined;

    /**
     * Create a BrowserWindow from the given configuration.
     * @param configuration The window configuration
     */
    createWindow(configuration?: IWindowConfiguration): Promise<BrowserWindow>;
}
