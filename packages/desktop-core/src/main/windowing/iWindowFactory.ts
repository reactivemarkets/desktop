import { IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";

export interface IWindowFactory {
    /**
     * Create a BrowserWindow from the given specification.
     * @param spec The application specification
     */
    createWindow(spec?: IApplicationSpecification): Promise<BrowserWindow>;
}
