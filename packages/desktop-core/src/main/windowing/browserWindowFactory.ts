import { IWindowConfiguration } from "@reactivemarkets/desktop-types";
import { BrowserWindow, BrowserWindowConstructorOptions, WebPreferences } from "electron";
import { IWindowFactory } from "./iWindowFactory";

export class BrowserWindowFactory implements IWindowFactory {
    private readonly preload: string;

    public constructor(preload: string) {
        this.preload = preload;
    }

    public createWindow = async (configuration?: IWindowConfiguration) => {
        const webPreferences: WebPreferences = {
            allowRunningInsecureContent: false,
            contextIsolation: true,
            enableRemoteModule: false,
            enableWebSQL: false,
            nodeIntegration: false,
            nodeIntegrationInSubFrames: false,
            nodeIntegrationInWorker: false,
            preload: this.preload,
            safeDialogs: true,
            sandbox: true,
            textAreasAreResizable: false,
            webSecurity: true,
        };
        let options: BrowserWindowConstructorOptions = {
            webPreferences,
        };

        if (configuration !== undefined) {
            const { affinity, ...rest } = configuration;

            options = {
                ...rest,
                webPreferences: {
                    ...webPreferences,
                    affinity,
                },
            };
        }

        const window = new BrowserWindow(options);

        return Promise.resolve(window);
    };
}
