import { IWindowConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";

export interface IWindowFactory {
    /**
     * Create a BrowserWindow from the given configuration.
     * @param configuration The window configuration
     */
    createWindow(configuration?: IWindowConfiguration): Promise<BrowserWindow>;
}
