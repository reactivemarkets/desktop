import { IDesktop } from "./iDesktop";
import { IDisplay } from "./iDisplay";
import { IPoint } from "./iPoint";
import { IScreen } from "./iScreen";
import { ScreenEvents } from "./screenEvents";

export class ScreenClient implements IScreen {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public getAllDisplays(): Promise<IDisplay[]> {
        return this.desktop.api.screen.getAllDisplays();
    }

    public getCursorScreenDisplay(): Promise<IDisplay> {
        return this.desktop.api.screen.getCursorScreenDisplay();
    }

    public getCursorScreenPoint(): Promise<IPoint> {
        return this.desktop.api.screen.getCursorScreenPoint();
    }

    public getDisplayNearestPoint(point: IPoint): Promise<IDisplay> {
        return this.desktop.api.screen.getDisplayNearestPoint(point);
    }

    public getPrimaryDisplay(): Promise<IDisplay> {
        return this.desktop.api.screen.getPrimaryDisplay();
    }

    public off(event: ScreenEvents, listener: () => void): void {
        this.desktop.api.screen.off(event, listener);
    }

    public on(event: ScreenEvents, listener: () => void): void {
        this.desktop.api.screen.on(event, listener);
    }
}
