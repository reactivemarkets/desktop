import { IConfiguration } from "@reactivemarkets/desktop-types";
import { IStorageProvisioner } from "../iStorageProvisioner";

export class CompositeStorageProvisioner implements IStorageProvisioner {
    private readonly provisioners: IStorageProvisioner[];

    public constructor(...provisioners: IStorageProvisioner[]) {
        this.provisioners = provisioners;
    }

    public canProvision(configuration: IConfiguration) {
        return this.provisioners.some((p) => p.canProvision(configuration));
    }

    public provision(configuration: IConfiguration) {
        const provisioner = this.provisioners.find((p) => p.canProvision(configuration));
        if (provisioner === undefined) {
            const error = new Error(`No storage provisioner found for ${configuration.metadata.name}`);

            return Promise.reject(error);
        }

        return provisioner.provision(configuration);
    }
}
