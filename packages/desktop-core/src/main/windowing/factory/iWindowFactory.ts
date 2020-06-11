import { IConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";

export interface IWindowFactory {
    /**
     * Create a BrowserWindow from the given configuration.
     * @param spec The application configuration
     */
    create(configuration: IConfiguration): Promise<BrowserWindow>;
}
