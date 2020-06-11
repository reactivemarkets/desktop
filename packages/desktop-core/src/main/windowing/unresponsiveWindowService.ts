import { dialog } from "electron";
import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IWindowService } from "./iWindowService";

export class UnresponsiveWindowService implements IWindowService {
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

        window.on("unresponsive", async () => {
            const options = {
                type: "info",
                title: "Not Responding",
                message: `${configuration.metadata.name} is not responding as expected.`,
                buttons: ["Reload", "Close"],
            };

            const { response } = await dialog.showMessageBox(window, options);
            switch (response) {
                case 0:
                    window.reload();
                    break;
                case 1:
                    window.close();
                    break;
            }
        });

        return window;
    }
}
