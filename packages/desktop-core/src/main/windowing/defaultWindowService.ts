import { IConfiguration, IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { BrowserWindow } from "electron";
import { IWindowFactory } from "./iWindowFactory";
import { IWindowService } from "./iWindowService";

export class DefaultWindowService implements IWindowService {
    private readonly windowFactory: IWindowFactory;
    private readonly registry = new Map<number, BrowserWindow>();

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public allWindows() {
        return Array.from(this.registry.values());
    }

    public getWindow(id: number) {
        return this.registry.get(id);
    }

    public async createWindow(configuration: IConfiguration) {
        const spec = configuration.spec as IApplicationSpecification;
        return this.windowFactory.createWindow(spec).then((window) => {
            const { id } = window;

            this.registry.set(id, window);

            window.once("closed", () => {
                this.registry.delete(id);
            });

            return window;
        });
    }
}
