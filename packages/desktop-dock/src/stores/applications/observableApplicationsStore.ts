import { desktop, registry, IConfiguration } from "@reactivemarkets/desktop-sdk";
import { observable, action, computed } from "mobx";
import { IApplicationsStore } from "./iApplicationsStore";
import { IApplication } from "./iApplication";

export class ObservableApplicationsStore implements IApplicationsStore {
    public readonly applicationMap = observable.map<string, IApplication>(undefined, { deep: false });

    @computed
    public get applications() {
        return Array.from(this.applicationMap.values());
    }

    public load() {
        if (!desktop.isHostedInDesktop) {
            return;
        }

        registry.on("registered", this.addApplication);
        registry.on("unregistered", this.removeApplication);
        registry
            .listApplications()
            .then((applications) => {
                applications.forEach(this.addApplication);
            })
            .catch((error) => {
                console.error(`Failed to get list of applications: ${error}`);
            });
    }

    @action
    private readonly addApplication = (configuration: IConfiguration) => {
        const { metadata } = configuration;

        const key = this.getKey(configuration);

        this.applicationMap.set(key, {
            ...metadata,
            configuration,
            key,
        });
    };

    @action
    private readonly removeApplication = (configuration: IConfiguration) => {
        const key = this.getKey(configuration);

        this.applicationMap.delete(key);
    };

    private readonly getKey = (configuration: IConfiguration) => {
        const { metadata } = configuration;

        const { name, namespace } = metadata;

        return `${namespace}/${name}`;
    };
}
