import { IConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";

export interface IWindowService {
    /**
     * Get all current windows.
     */
    all(): BrowserWindow[];

    /**
     * Get a specific window.
     *
     * @param id the window identifier
     */
    get(id: number): BrowserWindow | undefined;

    /**
     * Create a BrowserWindow from the given configuration.
     * @param configuration The window configuration
     */
    create(configuration: IConfiguration): Promise<BrowserWindow>;
}
