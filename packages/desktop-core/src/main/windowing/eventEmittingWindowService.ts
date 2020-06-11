import { IConfiguration } from "@reactivemarkets/desktop-types";
import { TypedEmitter } from "tiny-typed-emitter";
import { IWindowService } from "./iWindowService";
import { WindowInstance } from "./windowInstance";

interface IWindowServiceEvents {
    created: (instance: WindowInstance) => void;
}

export class EventEmittingWindowService extends TypedEmitter<IWindowServiceEvents> implements IWindowService {
    private readonly windowService: IWindowService;

    public constructor(windowService: IWindowService) {
        super();

        this.windowService = windowService;
    }

    public all() {
        return this.windowService.all();
    }

    public from(identifier: string | IConfiguration) {
        return this.windowService.from(identifier);
    }

    public async create(configuration: IConfiguration) {
        const window = await this.windowService.create(configuration);

        this.emit("created", window);

        return window;
    }
}
