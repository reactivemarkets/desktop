import { ILauncher } from "./iLauncher";
import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IDesktop } from "./iDesktop";

export class LauncherClient implements ILauncher {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        this.desktop = desktop;
    }

    public launch(configuration: IConfiguration): Promise<IConfiguration> {
        return this.desktop.api.launcher.launch(configuration);
    }
}
