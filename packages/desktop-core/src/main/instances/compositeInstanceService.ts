import { IInstanceService } from "./iInstanceService";
import { IConfiguration } from "@reactivemarkets/desktop-types";

export class CompositeInstanceService implements IInstanceService {
    private readonly instanceServices: IInstanceService[];

    public constructor(...instanceServices: IInstanceService[]) {
        this.instanceServices = instanceServices;
    }

    public get(uid: string) {
        let configuration: IConfiguration | undefined;
        for (const instance of this.instanceServices) {
            configuration = instance.get(uid);
            if (configuration !== undefined) {
                break;
            }
        }
        return configuration;
    }

    public list() {
        return this.instanceServices.flatMap((i) => i.list());
    }

    public kill(uid: string): Promise<void> {
        const service = this.instanceServices.find((i) => i.get(uid));
        if (service === undefined) {
            throw new Error(`Couldn't find instance with identifier: ${uid}`);
        }

        return service.kill(uid);
    }

    public restart(uid: string) {
        const service = this.instanceServices.find((i) => i.get(uid));
        if (service === undefined) {
            throw new Error(`Couldn't find instance with identifier: ${uid}`);
        }

        return service.restart(uid);
    }

    public stop(uid: string) {
        const service = this.instanceServices.find((i) => i.get(uid));
        if (service === undefined) {
            throw new Error(`Couldn't find instance with identifier: ${uid}`);
        }

        return service.stop(uid);
    }
}
