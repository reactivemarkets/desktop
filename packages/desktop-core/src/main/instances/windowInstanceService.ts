import { IInstanceService } from "./iInstanceService";
import { windowService } from "../windowing";

export class WindowInstanceService implements IInstanceService {
    public get(uid: string) {
        return windowService.from(uid)?.configuration;
    }

    public list() {
        return windowService.all().map((instance) => instance.configuration);
    }

    public kill(uid: string[]) {
        const killed = uid.map((id) => {
            windowService.from(id)?.instance.destroy();

            return id;
        });

        return Promise.resolve(killed);
    }

    public restart(uid: string[]) {
        const restarted = uid.map((id) => {
            windowService.from(id)?.instance.reload();

            return id;
        });

        return Promise.resolve(restarted);
    }

    public stop(uid: string[]) {
        const stopped = uid.map((id) => {
            windowService.from(id)?.instance.close();

            return id;
        });

        return Promise.resolve(stopped);
    }
}
