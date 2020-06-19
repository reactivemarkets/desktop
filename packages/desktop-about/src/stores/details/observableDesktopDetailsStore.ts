import { desktop } from "@reactivemarkets/desktop-sdk";
import { IDesktopDetails } from "./iDesktopDetails";
import { IDesktopDetailsStore } from "./iDesktopDetailsStore";
import { observable, action } from "mobx";

export class ObservableDesktopDetailsStore implements IDesktopDetailsStore {
    @observable
    public details?: IDesktopDetails;

    @action
    public async load() {
        if (!desktop.isHostedInDesktop) {
            return;
        }

        try {
            const appName = await desktop.getAppName();

            const appVersion = await desktop.getAppVersion();

            const versions = await desktop.getVersions();

            this.details = {
                appName,
                appVersion,
                versions,
            };
        } catch (error) {
            console.error(`Failed to load desktop details ${error}`);
        }
    }
}
