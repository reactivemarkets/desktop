import { IConfiguration, StorageState } from "@reactivemarkets/desktop-types";
import { find } from "ix/iterable";
import { IUidGenerator } from "../ids";
import { IStorageService } from "./iStorageService";
import { IStorageProvisioner } from "./provisioners";
import { StorageInstance } from "./storageInstance";

export class DefaultStorageService implements IStorageService {
    private readonly uidGenerator: IUidGenerator;
    private readonly storageProvisioner: IStorageProvisioner;
    private readonly storageRegistry = new Map<string, StorageInstance>();

    public constructor(storageProvisioner: IStorageProvisioner, uidGenerator: IUidGenerator) {
        this.storageProvisioner = storageProvisioner;
        this.uidGenerator = uidGenerator;
    }

    public all() {
        return Array.from(this.storageRegistry.values());
    }

    public from(identifier: string | IConfiguration) {
        if (typeof identifier === "string") {
            return this.storageRegistry.get(identifier);
        }

        return find(this.storageRegistry.values(), {
            predicate: ({ configuration }) => {
                const { metadata } = configuration;

                return metadata.namespace === identifier.metadata.namespace;
            },
        });
    }

    public fromNamespace(namespace: string) {
        return find(this.storageRegistry.values(), {
            predicate: ({ configuration }) => {
                const { metadata } = configuration;

                return metadata.namespace === namespace;
            },
        });
    }

    public async create(configuration: IConfiguration) {
        const storageClient = await this.storageProvisioner.provision(configuration);

        const startTime = new Date();
        const state = StorageState.provisioned;
        const uid = this.uidGenerator.generate();

        const runningConfiguration = {
            ...configuration,
            metadata: {
                ...configuration.metadata,
                uid,
            },
            status: {
                startTime,
                state,
            },
        };

        const instance = new StorageInstance(runningConfiguration, storageClient);

        this.storageRegistry.set(uid, instance);

        return instance;
    }
}
