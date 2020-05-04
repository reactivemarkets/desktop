import { DesktopWindow } from "./desktopWindow";
import { IDesktop } from "./iDesktop";
import { IDesktopWindowClient } from "./iDesktopWindowClient";

export class DesktopWindowClient implements IDesktopWindowClient {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public current() {
        return new DesktopWindow(this.desktop);
    }
}
