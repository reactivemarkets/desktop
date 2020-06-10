import { IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { BrowserWindow, BrowserWindowConstructorOptions, WebPreferences } from "electron";
import { IWindowFactory } from "./iWindowFactory";

export class BrowserWindowFactory implements IWindowFactory {
    private readonly defaultWebPreferences: WebPreferences;

    public constructor(defaultWebPreferences: WebPreferences) {
        this.defaultWebPreferences = defaultWebPreferences;
    }

    public createWindow = async (spec?: IApplicationSpecification) => {
        let options: BrowserWindowConstructorOptions = {
            webPreferences: this.defaultWebPreferences,
        };

        if (spec !== undefined) {
            const { window, ...rest } = spec;

            options = {
                ...window,
                webPreferences: {
                    ...rest,
                    ...this.defaultWebPreferences,
                },
            };
        }

        const window = new BrowserWindow(options);

        return Promise.resolve(window);
    };
}
