import { IConfiguration } from "@reactivemarkets/desktop-types";
import { TypedEmitter } from "tiny-typed-emitter";
import { IRegistry } from "./iRegistry";
import { IDesktop } from "./iDesktop";

interface IRegistryClientEvents {
    registered: (configuration: IConfiguration) => void;
    unregistered: (configuration: IConfiguration) => void;
}

export class RegistryClient extends TypedEmitter<IRegistryClientEvents> implements IRegistry {
    private readonly desktop: IDesktop;

    public constructor(desktop: IDesktop) {
        super();

        this.desktop = desktop;
        this.on = (event, listener) => {
            this.desktop.api.registry.on(event, listener);

            return this;
        };
        this.off = (event, listener) => {
            this.desktop.api.registry.off(event, listener);

            return this;
        };
    }

    public listApplications(namespace?: string): Promise<IConfiguration[]> {
        return this.desktop.api.registry.listApplications(namespace);
    }

    public register(configuration: IConfiguration): Promise<void> {
        return this.desktop.api.registry.register(configuration);
    }

    public unregister(configuration: IConfiguration): Promise<void> {
        return this.desktop.api.registry.unregister(configuration);
    }
}
