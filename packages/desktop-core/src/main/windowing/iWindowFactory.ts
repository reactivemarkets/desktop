import { IApplicationConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";

export interface IWindowFactory {
    /**
     * Create a BrowserWindow from the given configuration.
     * @param configuration The application configuration
     */
    createWindow(configuration?: IApplicationConfiguration): Promise<BrowserWindow>;
}
