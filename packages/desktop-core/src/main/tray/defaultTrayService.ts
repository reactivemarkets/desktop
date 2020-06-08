import { ITrayConfiguration } from "@reactivemarkets/desktop-types";
import { app, dialog, Menu, Tray, MenuItemConstructorOptions } from "electron";
import { ILogger } from "../logging";
import { ITrayService } from "./iTrayService";
import { IShellService } from "../shell";

interface ITrayServiceOptions {
    readonly logger: ILogger;
    readonly shellService: IShellService;
    readonly defaultIcon: string;
    readonly defaultDocumentationUrl: string;
}

export class DefaultTrayService implements ITrayService {
    private tray?: Tray;
    private readonly defaultDocumentationUrl: string;
    private readonly defaultIcon: string;
    private readonly logger: ILogger;
    private readonly shellService: IShellService;

    public constructor({ logger, shellService, defaultIcon, defaultDocumentationUrl }: ITrayServiceOptions) {
        this.logger = logger;
        this.shellService = shellService;
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
                    click: this.openDocumentation(documentationUrl),
                },
                { type: "separator" },
                {
                    label: "Restart",
                    type: "normal",
                    accelerator: "CommandOrControl+R",
                    click: this.restart,
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

    private readonly openDocumentation = (documentationUrl: string) => async () => {
        try {
            await this.shellService.openExternal(documentationUrl);
        } catch (error) {
            const title = "Can't open external url";
            const content = `${error}`;
            this.logger.error(`${title}: ${content}`);
            dialog.showErrorBox(title, content);
        }
    };

    private readonly restart = () => {
        app.relaunch();
        app.exit();
    };
}
