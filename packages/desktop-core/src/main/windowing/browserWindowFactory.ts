import { BrowserWindow, BrowserWindowConstructorOptions, WebPreferences } from "electron";

import { IWindowConfiguration } from "../configuration";

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
            sandbox: true,
            textAreasAreResizable: false,
            webSecurity: true,
        };
        let options: BrowserWindowConstructorOptions = {
            webPreferences,
        };

        if (configuration !== undefined) {
            options = {
                acceptFirstMouse: configuration.acceptFirstMouse,
                alwaysOnTop: configuration.alwaysOnTop,
                autoHideMenuBar: configuration.autoHideMenuBar,
                backgroundColor: configuration.backgroundColor,
                center: configuration.centered,
                closable: configuration.closeable,
                darkTheme: configuration.darkTheme,
                disableAutoHideCursor: configuration.disableAutoHideCursor,
                focusable: configuration.focusable,
                frame: configuration.frame,
                fullscreen: configuration.fullscreen,
                fullscreenable: configuration.fullscreenable,
                hasShadow: configuration.hasShadow,
                height: configuration.height,
                icon: configuration.icon,
                kiosk: configuration.kiosk,
                maxHeight: configuration.maxHeight,
                maxWidth: configuration.maxWidth,
                maximizable: configuration.maximizable,
                minHeight: configuration.minHeight,
                minWidth: configuration.minWidth,
                minimizable: configuration.minimizable,
                movable: configuration.movable,
                opacity: configuration.opacity,
                resizable: configuration.resizeable,
                show: configuration.show,
                skipTaskbar: configuration.skipTaskbar,
                tabbingIdentifier: configuration.tabbingIdentifier,
                title: configuration.title,
                titleBarStyle: configuration.titleBarStyle,
                transparent: configuration.transparent,
                webPreferences: {
                    ...webPreferences,
                    affinity: configuration.affinity,
                },
                width: configuration.width,
                x: configuration.x,
                y: configuration.y,
                zoomToPageWidth: configuration.zoomToPageWidth,
            };
        }

        const window = new BrowserWindow(options);

        return Promise.resolve(window);
    }
}
