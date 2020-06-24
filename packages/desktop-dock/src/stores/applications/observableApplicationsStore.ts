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
import { IDockAnnotations } from "./iDockAnnotations";

export class ObservableApplicationsStore implements IApplicationsStore {
    public readonly applicationMap = observable.map<string, IApplication>([], { deep: false });

    @computed
    public get applications() {
        const values = this.applicationMap.values();

        const sorted = from(values).pipe(
            orderBy((item) => item.category),
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

        const { annotations, description, name, namespace } = metadata;
        let category = namespace ?? WellKnownNamespaces.default;
        if (annotations !== undefined) {
            const dockAnnotations = annotations["@desktop/dock"] as IDockAnnotations | undefined;
            if (dockAnnotations?.excludeFromSearch) {
                return;
            }
            if (dockAnnotations?.category !== undefined) {
                category = dockAnnotations.category;
            }
        }

        const key = this.getKey(configuration);

        this.applicationMap.set(key, {
            category,
            configuration,
            description,
            key,
            name,
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
