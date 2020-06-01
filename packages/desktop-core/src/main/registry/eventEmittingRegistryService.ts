import { IConfiguration } from "@reactivemarkets/desktop-types";
import { TypedEmitter } from "tiny-typed-emitter";
import { IRegistryService } from "./iRegistryService";

interface IRegistryServiceEvents {
    registered: (configuration: IConfiguration) => void;
    unregistered: (configuration: IConfiguration) => void;
}

export class EventEmittingRegistryService extends TypedEmitter<IRegistryServiceEvents> implements IRegistryService {
    private readonly registryService: IRegistryService;

    public constructor(registryService: IRegistryService) {
        super();

        this.registryService = registryService;
    }

    public getRegistry() {
        return this.registryService.getRegistry();
    }

    public async register(configuration: IConfiguration) {
        await this.registryService.register(configuration);

        this.emit("registered", configuration);
    }

    public async unregister(configuration: IConfiguration) {
        await this.registryService.unregister(configuration);

        this.emit("unregistered", configuration);
    }
}
