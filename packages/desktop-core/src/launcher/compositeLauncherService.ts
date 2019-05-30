import { IConfiguration } from "../configuration";

import { ILauncherService } from "./iLauncherService";

export class CompositeLauncherService implements ILauncherService {
    private readonly launchers: ILauncherService[];

    public constructor(...launchers: ILauncherService[]) {
        this.launchers = launchers;
    }

    public canLaunch(configuration: IConfiguration): boolean {

        return this
            .launchers
            .some((launcher) => launcher.canLaunch(configuration));
    }

    public async launch(configuration: IConfiguration) {

        const launcher = this
            .launchers
            .find((l) => l.canLaunch(configuration));

        if (launcher === undefined) {
            const error = new Error(`no launcher for ${configuration.kind}`);

            return Promise.reject(error);
        }

        return launcher.launch(configuration);
    }
}
