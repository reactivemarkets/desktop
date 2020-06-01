import { IConfiguration } from "@reactivemarkets/desktop-types";
import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";
import { TypedEmitter } from "tiny-typed-emitter";

type RegistryEvents = "registered" | "unregistered";

export class Registry {
    #emitter = new TypedEmitter();

    public constructor() {
        ipcRenderer.on(ReservedChannels.registry_events, (_, event, configuration) => {
            this.#emitter.emit(event, configuration);
        });
    }

    public off = (event: RegistryEvents, listener: (configuration: IConfiguration) => void) => {
        this.#emitter.off(event, listener);

        const listenerCount = this.#emitter.listenerCount(event);
        if (listenerCount === 0) {
            ipcRenderer.send(`${ReservedChannels.registry_events}/off`, event);
        }
    };

    public on = (event: RegistryEvents, listener: (configuration: IConfiguration) => void) => {
        const listenerCount = this.#emitter.listenerCount(event);
        this.#emitter.on(event, listener);

        if (listenerCount === 0) {
            ipcRenderer.send(`${ReservedChannels.registry_events}/on`, event);
        }
    };

    public listApplications = (namespace?: string) => {
        return ipcRenderer.invoke(ReservedChannels.registry_listApplications, namespace);
    };

    public listService = (namespace?: string) => {
        return ipcRenderer.invoke(ReservedChannels.registry_listServices, namespace);
    };

    public register = (configuration: IConfiguration) => {
        return ipcRenderer.invoke(ReservedChannels.registry_register, configuration);
    };

    public unregister = (configuration: IConfiguration) => {
        return ipcRenderer.invoke(ReservedChannels.registry_unregister, configuration);
    };
}
