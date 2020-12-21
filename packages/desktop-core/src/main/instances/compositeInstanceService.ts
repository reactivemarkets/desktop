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

    public async kill(uid: string[]) {
        const services = uid
            .map((id) => {
                const service = this.instanceServices.find((i) => i.get(id));

                return service?.kill([id]);
            })
            .filter((func) => func !== undefined)
            .map((func) => func!);

        const killed = await Promise.all(services);

        return killed.flat();
    }

    public restart(uid: string) {
        const service = this.instanceServices.find((i) => i.get(uid));
        if (service === undefined) {
            throw new Error(`Couldn't find instance with identifier: ${uid}`);
        }

        return service.restart(uid);
    }

    public async stop(uid: string[]) {
        const services = uid
            .map((id) => {
                const service = this.instanceServices.find((i) => i.get(id));

                return service?.stop([id]);
            })
            .filter((func) => func !== undefined)
            .map((func) => func!);

        const stopped = await Promise.all(services);

        return stopped.flat();
    }
}
