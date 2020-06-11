import { dialog } from "electron";
import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IWindowService } from "./iWindowService";

export class FailedToLoadWindowService implements IWindowService {
    private readonly windowService: IWindowService;

    public constructor(windowService: IWindowService) {
        this.windowService = windowService;
    }

    public all() {
        return this.windowService.all();
    }

    public get(id: number) {
        return this.windowService.get(id);
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowService.create(configuration);

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
