import { WellKnownNamespaces, IConfiguration, ConfigurationKind } from "@reactivemarkets/desktop-types";
import { ReservedChannels } from "../../common";
import { ipcMain } from "electron";
import { registryService } from "../registry";

export const registryIpcEvents = () => {
    const eventMap = new Map<string, (configuration: IConfiguration) => void>();

    ipcMain.handle(ReservedChannels.registry_listApplications, async (_, namespace = WellKnownNamespaces.all) => {
        const registry = await registryService.getRegistry();

        return registry
            .filter((c) => {
                if (namespace === WellKnownNamespaces.all) {
                    return true;
                }

                return c.metadata.namespace === namespace;
            })
            .filter((r) => r.kind === ConfigurationKind.Application);
    });
    ipcMain.handle(ReservedChannels.registry_listServices, async (_, namespace = WellKnownNamespaces.all) => {
        const registry = await registryService.getRegistry();

        return registry
            .filter((c) => {
                if (namespace === WellKnownNamespaces.all) {
                    return true;
                }

                return c.metadata.namespace === namespace;
            })
            .filter((r) => r.kind === ConfigurationKind.Service);
    });
    ipcMain.handle(ReservedChannels.registry_register, (_, configuration: IConfiguration) => {
        return registryService.register(configuration);
    });
    ipcMain.handle(ReservedChannels.registry_unregister, (_, configuration: IConfiguration) => {
        return registryService.unregister(configuration);
    });
    ipcMain.on(`${ReservedChannels.registry_events}/off`, (event, registryEvent) => {
        const key = `${event.sender.id}/${registryEvent}`;

        const listener = eventMap.get(key);
        if (listener !== undefined) {
            registryService.off(registryEvent, listener);
            eventMap.delete(key);
        }
    });
    ipcMain.on(`${ReservedChannels.registry_events}/on`, (event, registryEvent) => {
        const listener = (configuration: IConfiguration) => {
            event.sender.send(ReservedChannels.registry_events, registryEvent, configuration);
        };

        const key = `${event.sender.id}/${registryEvent}`;

        eventMap.set(key, listener);

        registryService.on(registryEvent, listener);
    });
};
