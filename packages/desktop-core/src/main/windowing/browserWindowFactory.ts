import { IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { BrowserWindow, WebPreferences } from "electron";
import { IWindowFactory } from "./iWindowFactory";

export class BrowserWindowFactory implements IWindowFactory {
    private readonly defaultWebPreferences: WebPreferences;

    public constructor(defaultWebPreferences: WebPreferences) {
        this.defaultWebPreferences = defaultWebPreferences;
    }

    public createWindow = async (spec?: IApplicationSpecification) => {
        if (spec === undefined) {
            const defaultWindow = new BrowserWindow({
                webPreferences: this.defaultWebPreferences,
            });

            return Promise.resolve(defaultWindow);
        }

        const { contentProtection, webPreferences: windowWebPreferences, window } = spec;

        const webPreferences = this.defaultWebPreferences;
        if (windowWebPreferences !== undefined) {
            const { affinity, devTools, partition } = windowWebPreferences;
            if (affinity !== undefined) {
                webPreferences.affinity = affinity;
            }
            if (devTools !== undefined) {
                webPreferences.devTools = devTools;
            }
            if (partition !== undefined) {
                webPreferences.partition = partition;
            }
        }

        const options = {
            ...window,
            webPreferences,
        };

        const browserWindow = new BrowserWindow(options);
        if (contentProtection !== undefined) {
            browserWindow.setContentProtection(contentProtection);
        }

        return Promise.resolve(browserWindow);
    };
}
