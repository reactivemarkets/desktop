import {
    desktop,
    launcher,
    registry,
    IConfiguration,
    WellKnownNamespaces,
    ConfigurationKind,
} from "@reactivemarkets/desktop-sdk";
import { from } from "ix/iterable";
import { orderBy, thenBy } from "ix/iterable/operators";
import { observable, action, computed } from "mobx";
import { IApplicationsStore } from "./iApplicationsStore";
import { IApplication } from "./iApplication";

export class ObservableApplicationsStore implements IApplicationsStore {
    public readonly applicationMap = observable.map<string, IApplication>([], { deep: false });

    @computed
    public get applications() {
        const values = this.applicationMap.values();

        const sorted = from(values).pipe(
            orderBy((item) => item.namespace),
            thenBy((item) => item.name),
        );

        return Array.from(sorted);
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

                console.log(`Registered ${applications.length} applications`);
            })
            .catch((error) => {
                console.error(`Failed to get list of applications: ${error}`);
            });
    }

    @action
    private readonly addApplication = (configuration: IConfiguration) => {
        const { kind, metadata } = configuration;
        if (kind !== ConfigurationKind.Application) {
            return;
        }
        const { namespace, ...rest } = metadata;
        if (namespace === WellKnownNamespaces.desktop) {
            return;
        }

        const key = this.getKey(configuration);

        this.applicationMap.set(key, {
            ...rest,
            namespace: namespace ?? WellKnownNamespaces.default,
            configuration,
            key,
            launch: () => {
                return launcher.launch(configuration);
            },
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
