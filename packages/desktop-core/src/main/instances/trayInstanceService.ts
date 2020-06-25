import { IInstanceService } from "./iInstanceService";
import { trayService } from "../tray";

export class TrayInstanceService implements IInstanceService {
    public get(uid: string) {
        return trayService.from(uid)?.configuration;
    }

    public list() {
        return trayService.all().map((instance) => instance.configuration);
    }

    public kill(uid: string) {
        trayService.from(uid)?.instance.destroy();

        return Promise.resolve();
    }

    public restart() {
        return Promise.resolve();
    }

    public stop(uid: string) {
        trayService.from(uid)?.instance.destroy();

        return Promise.resolve();
    }
}
