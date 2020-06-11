import { IConfiguration } from "@reactivemarkets/desktop-types";
import { dialog } from "electron";
import { IWindowFactory } from "./iWindowFactory";

export class UnresponsiveWindowFactory implements IWindowFactory {
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);

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
