import { IConfiguration } from "@reactivemarkets/desktop-types";
import { find } from "ix/iterable";
import { ITrayService } from "./iTrayService";
import { ITrayFactory } from "./factory/iTrayFactory";
import { TrayInstance } from "./trayInstance";
import { IUidGenerator } from "../ids";

export class DefaultTrayService implements ITrayService {
    private readonly uidGenerator: IUidGenerator;
    private readonly trayFactory: ITrayFactory;
    private readonly configRegistry = new Map<string, TrayInstance>();

    public constructor(trayFactory: ITrayFactory, uidGenerator: IUidGenerator) {
        this.trayFactory = trayFactory;
        this.uidGenerator = uidGenerator;
    }

    public all() {
        return Array.from(this.configRegistry.values());
    }

    public from(identifier: string | IConfiguration) {
        if (typeof identifier === "string") {
            return this.configRegistry.get(identifier);
        }

        return find(this.configRegistry.values(), {
            predicate: (instance) => {
                const { metadata } = instance.configuration;
                return (
                    metadata.namespace === identifier.metadata.namespace && metadata.name === identifier.metadata.name
                );
            },
        });
    }

    public async create(configuration: IConfiguration) {
        const tray = await this.trayFactory.create(configuration);

        const startTime = new Date();
        const uid = this.uidGenerator.generate();

        const runningConfiguration = {
            ...configuration,
            metadata: {
                ...configuration.metadata,
                uid,
            },
            status: {
                startTime,
            },
        };

        const instance = new TrayInstance(runningConfiguration, tray, () => {
            this.configRegistry.delete(uid);
        });

        this.configRegistry.set(uid, instance);

        return instance;
    }
}
