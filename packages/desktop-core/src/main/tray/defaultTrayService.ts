import { IConfiguration } from "@reactivemarkets/desktop-types";
import { find } from "ix/iterable";
import { v4 as uuid } from "uuid";
import { ITrayService } from "./iTrayService";
import { ITrayFactory } from "./factory/iTrayFactory";
import { TrayInstance } from "./trayInstance";

export class DefaultTrayService implements ITrayService {
    private readonly trayFactory: ITrayFactory;
    private readonly configRegistry = new Map<string, TrayInstance>();

    public constructor(trayFactory: ITrayFactory) {
        this.trayFactory = trayFactory;
    }

    public all() {
        return Array.from(this.configRegistry.values());
    }

    public from(identifier: string | IConfiguration) {
        if (typeof identifier === "string") {
            return this.configRegistry.get(identifier);
        }

        return find(this.configRegistry.values(), (instance) => {
            const { metadata } = instance.configuration;
            return metadata.namespace === identifier.metadata.namespace && metadata.name === identifier.metadata.name;
        });
    }

    public async create(configuration: IConfiguration) {
        const tray = await this.trayFactory.create(configuration);

        const startTime = new Date();
        const uid = uuid();

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

        const instance = new TrayInstance(runningConfiguration, tray);

        this.configRegistry.set(uid, instance);

        return instance;
    }
}
