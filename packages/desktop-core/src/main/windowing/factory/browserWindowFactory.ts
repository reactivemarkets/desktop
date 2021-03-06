import { IConfiguration, IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { BrowserWindow, BrowserWindowConstructorOptions, WebPreferences } from "electron";
import { defaultWindowParameters } from "./defaultWindowParameters";
import { IWindowFactory } from "./iWindowFactory";

export class BrowserWindowFactory implements IWindowFactory {
    private readonly defaultWebPreferences: WebPreferences;

    public constructor(defaultWebPreferences: WebPreferences) {
        this.defaultWebPreferences = defaultWebPreferences;
    }

    public create = (configuration: IConfiguration) => {
        const spec = configuration.spec as IApplicationSpecification | undefined;
        if (spec === undefined) {
            const defaultWindow = new BrowserWindow({
                ...defaultWindowParameters,
                webPreferences: this.defaultWebPreferences,
            });

            return Promise.resolve(defaultWindow);
        }

        const { webPreferences: windowWebPreferences, window } = spec;

        const webPreferences = this.defaultWebPreferences;
        if (windowWebPreferences !== undefined) {
            const { devTools, partition } = windowWebPreferences;
            if (devTools !== undefined) {
                webPreferences.devTools = devTools;
            }
            if (partition !== undefined) {
                webPreferences.partition = partition;
            }
        }

        const options: BrowserWindowConstructorOptions = {
            ...defaultWindowParameters,
            ...window,
            webPreferences,
        };

        const browserWindow = new BrowserWindow(options);

        return Promise.resolve(browserWindow);
    };
}
