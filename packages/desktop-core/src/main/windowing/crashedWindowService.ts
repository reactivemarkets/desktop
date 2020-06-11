import { dialog } from "electron";
import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IWindowService } from "./iWindowService";

export class CrashedWindowService implements IWindowService {
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

        window.webContents.on("crashed", async (_, killed) => {
            const options = {
                type: "info",
                title: "Window Crashed",
                message: `${configuration.metadata.name} has crashed.`,
                detail: killed ? "The process was killed." : undefined,
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
