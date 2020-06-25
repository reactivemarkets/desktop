import { IConfiguration, ConfigurationKind } from "@reactivemarkets/desktop-types";
import { IStorageClient } from "../iStorageClient";
import { IStorageProvisioner } from "../iStorageProvisioner";
import { TransientStorageClient } from "./transientStorageClient";

export class TransientStorageProvisioner implements IStorageProvisioner {
    public canProvision({ kind }: IConfiguration): boolean {
        if (kind !== ConfigurationKind.Storage) {
            return false;
        }

        return true;
    }

    public provision(): Promise<IStorageClient> {
        const store = new TransientStorageClient();

        return Promise.resolve(store);
    }
}
