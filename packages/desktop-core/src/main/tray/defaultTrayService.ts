import { ITrayConfiguration } from "@reactivemarkets/desktop-types";
import { app, Menu, Tray, shell, MenuItemConstructorOptions } from "electron";
import { ILogger } from "../logging";
import { ITrayService } from "./iTrayService";

export class DefaultTrayService implements ITrayService {
    private tray?: Tray;
    private readonly defaultDocumentationUrl: string;
    private readonly defaultIcon: string;
    private readonly logger: ILogger;

    public constructor(logger: ILogger, defaultIcon: string, defaultDocumentationUrl: string) {
        this.logger = logger;
        this.defaultIcon = defaultIcon;
        this.defaultDocumentationUrl = defaultDocumentationUrl;
    }

    public async configure(configuration: ITrayConfiguration) {
        try {
            const { icon = this.defaultIcon, documentationUrl = this.defaultDocumentationUrl } = configuration;

            const defaultMenu: MenuItemConstructorOptions[] = [
                { label: "About Desktop", type: "normal", role: "about" },
                { type: "separator" },
                {
                    label: "Documentation",
                    click: async () => {
                        await shell.openExternal(documentationUrl);
                    },
                },
                { type: "separator" },
                {
                    label: "Restart",
                    type: "normal",
                    accelerator: "CommandOrControl+R",
                    click: () => {
                        app.relaunch();
                        app.exit();
                    },
                },
                { label: "Quit Desktop", type: "normal", role: "quit", accelerator: "CommandOrControl+Q" },
            ];

            const contextMenu = Menu.buildFromTemplate(defaultMenu);

            this.tray = new Tray(icon);
            this.tray.setIgnoreDoubleClickEvents(true);
            this.tray.setContextMenu(contextMenu);

            this.logger.info("Configured tray menu");

            return Promise.resolve();
        } catch (error) {
            this.logger.error(`Failed to add tray icon ${error}`);

            return Promise.reject(error);
        }
    }
}
