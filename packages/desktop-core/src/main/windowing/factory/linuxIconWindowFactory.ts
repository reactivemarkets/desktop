import { IWindowFactory } from "./iWindowFactory";
import { IConfiguration } from "@reactivemarkets/desktop-types";

export class LinuxIconWindowFactory implements IWindowFactory {
    private readonly iconPath: string;
    private readonly windowFactory: IWindowFactory;

    public constructor(windowFactory: IWindowFactory, iconPath: string) {
        this.windowFactory = windowFactory;
        this.iconPath = iconPath;
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);
        if (process.platform === "linux") {
            window.setIcon(this.iconPath);
        }

        return window;
    }
}
