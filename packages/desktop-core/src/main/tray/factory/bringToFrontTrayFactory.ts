import { ITrayFactory } from "./iTrayFactory";
import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IWindowService } from "../../windowing";
import { app } from "electron";

export class BringToFrontTrayFactory implements ITrayFactory {
    private readonly trayFactory: ITrayFactory;
    private readonly windowService: IWindowService;

    public constructor(trayFactory: ITrayFactory, windowService: IWindowService) {
        this.trayFactory = trayFactory;
        this.windowService = windowService;
    }

    public async create(configuration: IConfiguration) {
        const tray = await this.trayFactory.create(configuration);
        if (process.platform !== "win32") {
            return tray;
        }

        tray.on("click", this.bringAllToFront);

        return tray;
    }

    private readonly bringAllToFront = () => {
        app.focus({
            steal: true,
        });

        this.windowService.all().forEach(({ instance }) => {
            if (instance.isVisible()) {
                instance.moveTop();
            }
        });
    };
}
