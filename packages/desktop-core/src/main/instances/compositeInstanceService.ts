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

    public async kill(uid: string): Promise<void> {
        const promises = this.instanceServices.map((i) => i.kill(uid));

        await Promise.all(promises);
    }

    public async restart(uid: string) {
        const promises = this.instanceServices.map((i) => i.restart(uid));

        await Promise.all(promises);
    }

    public async stop(uid: string) {
        const promises = this.instanceServices.map((i) => i.stop(uid));

        await Promise.all(promises);
    }
}
