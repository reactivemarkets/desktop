import { IInstanceService } from "./iInstanceService";

import { windowService } from "../windowing";

export class WindowInstanceService implements IInstanceService {
    public get(uid: string) {
        return windowService.from(uid)?.configuration;
    }

    public list() {
        return windowService.all().map((instance) => instance.configuration);
    }

    public kill(uid: string) {
        windowService.from(uid)?.instance.destroy();

        return Promise.resolve();
    }

    public restart(uid: string) {
        windowService.from(uid)?.instance.reload();

        return Promise.resolve();
    }

    public stop(uid: string) {
        windowService.from(uid)?.instance.close();

        return Promise.resolve();
    }
}
