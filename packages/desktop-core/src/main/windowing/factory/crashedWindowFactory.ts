import { IConfiguration } from "@reactivemarkets/desktop-types";
import { dialog } from "electron";
import { IWindowFactory } from "./iWindowFactory";

export class CrashedWindowFactory implements IWindowFactory {
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);

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
