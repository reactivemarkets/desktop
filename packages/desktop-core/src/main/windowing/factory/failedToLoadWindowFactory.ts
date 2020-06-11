import { IConfiguration } from "@reactivemarkets/desktop-types";
import { dialog } from "electron";
import { IWindowFactory } from "./iWindowFactory";

export class FailedToLoadWindowFactory implements IWindowFactory {
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);

        window.webContents.once("did-fail-load", async (_, errorCode, errorDescription) => {
            const options = {
                type: "error",
                title: "Window Failed",
                message: `${configuration.metadata.name} failed to load.`,
                detail: `${errorCode}: ${errorDescription}`,
                buttons: ["Close"],
            };

            const { response } = await dialog.showMessageBox(window, options);
            switch (response) {
                default:
                case 1:
                    window.close();
                    break;
            }
        });

        return window;
    }
}
