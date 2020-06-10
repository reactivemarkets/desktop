import { IConfiguration, ConfigurationKind, IStorageSpecification } from "@reactivemarkets/desktop-types";
import { IStorageProvisioner } from "./iStorageProvisioner";
import { IStorageClient } from "./iStorageClient";
import { YamlLocalStorageClient } from "./yamlLocalStorageClient";

export class YamlLocalStorageProvisioner implements IStorageProvisioner {
    public canProvision({ kind, spec }: IConfiguration) {
        if (kind !== ConfigurationKind.Storage) {
            return false;
        }

        const storageSpecification = spec as IStorageSpecification;

        return storageSpecification.provisioner === "local";
    }

    public provision({ metadata }: IConfiguration): Promise<IStorageClient> {
        const name = `${metadata.namespace}.${metadata.name}`;

        const store = new YamlLocalStorageClient(name);

        return Promise.resolve(store);
    }
}
