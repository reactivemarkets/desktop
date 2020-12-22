import { IInstanceService } from "./iInstanceService";
import { trayService } from "../tray";

export class TrayInstanceService implements IInstanceService {
    public get(uid: string) {
        return trayService.from(uid)?.configuration;
    }

    public list() {
        return trayService.all().map((instance) => instance.configuration);
    }

    public kill(uid: string[]) {
        const killed = uid.map((id) => {
            trayService.from(id)?.destroy();

            return id;
        });

        return Promise.resolve(killed);
    }

    public restart() {
        const error = new Error("You can't restart the tray");

        return Promise.reject(error);
    }

    public stop(uid: string[]) {
        return this.kill(uid);
    }
}
