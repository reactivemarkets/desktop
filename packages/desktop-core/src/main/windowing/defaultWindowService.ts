import { ApplicationState, IConfiguration, IApplicationSpecification } from "@reactivemarkets/desktop-types";
import { find } from "ix/iterable";
import { v4 as uuid } from "uuid";
import { IWindowFactory } from "./factory";
import { IWindowService } from "./iWindowService";
import { WindowInstance } from "./windowInstance";

export class DefaultWindowService implements IWindowService {
    private readonly windowFactory: IWindowFactory;
    private readonly instanceRegistry = new Map<string, WindowInstance>();

    public constructor(windowFactory: IWindowFactory) {
        this.windowFactory = windowFactory;
    }

    public all() {
        return Array.from(this.instanceRegistry.values());
    }

    public from(identifier: number | string | IConfiguration) {
        if (typeof identifier === "string") {
            return this.instanceRegistry.get(identifier);
        }

        if (typeof identifier === "number") {
            return find(this.instanceRegistry.values(), ({ instance }) => {
                return instance.id === identifier;
            });
        }

        return find(this.instanceRegistry.values(), (instance) => {
            const { metadata } = instance.configuration;
            return metadata.namespace === identifier.metadata.namespace && metadata.name === identifier.metadata.name;
        });
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowFactory.create(configuration);

        const { url } = configuration.spec as IApplicationSpecification;

        await window.loadURL(url);

        const { webContents } = window;

        const bounds = window.getBounds();
        const isFullScreen = window.isFullScreen();
        const isMaximized = window.isMaximized();
        const isMinimized = window.isMinimized();
        const startTime = new Date();
        const state = ApplicationState.running;
        const uid = uuid();
        const windowId = window.id;

        const runningConfiguration = {
            ...configuration,
            metadata: {
                ...configuration.metadata,
                uid,
            },
            status: {
                ...bounds,
                isFullScreen,
                isMaximized,
                isMinimized,
                osProcessId: webContents.getOSProcessId(),
                processId: webContents.getProcessId(),
                startTime,
                state,
                windowId,
            },
        };

        const instance = new WindowInstance(runningConfiguration, window);

        this.instanceRegistry.set(uid, instance);

        window.once("closed", () => {
            this.instanceRegistry.delete(uid);
        });

        return instance;
    }
}
