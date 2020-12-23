import { desktop, registry, IConfiguration, WellKnownConfigurationKind } from "@reactivemarkets/desktop-sdk";
import { from } from "ix/iterable";
import { distinct, filter, map, orderBy, thenBy } from "ix/iterable/operators";
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

    @computed
    public get categories() {
        const values = this.applicationMap.values();

        const categories = from(values).pipe(
            map((item) => item.category),
            filter((item) => item !== undefined),
            distinct(),
            map((item) => item!),
            orderBy((item) => item),
        );

        return Array.from(categories);
    }

    public async load() {
        try {
            if (!desktop.isHostedInDesktop) {
                for (let index = 0; index < 100; index++) {
                    this.addApplication({
                        kind: WellKnownConfigurationKind.Application,
                        metadata: {
                            name: "test" + index,
                            description: "Webpage",
                            annotations: {
                                "@reactivemarkets/desktop-dock": {
                                    category: "web" + (index % 10),
                                    display: "Reactive Markets | The Professional Markets Platform" + index,
                                },
                            },
                        },
                        spec: {},
                    });
                }

                return;
            }

            registry.on("registered", this.addApplication);
            registry.on("unregistered", this.removeApplication);

            const applications = await registry.listApplications();

            applications.forEach(this.addApplication);

            console.log(`Registered ${applications.length} applications`);
        } catch (error) {
            console.error(`Failed to get list of applications: ${error}`);
        }
    }

    public async remove({ configuration }: IApplication) {
        await registry.unregister(configuration);

        const key = this.getKey(configuration);

        this.applicationMap.delete(key);
    }

    @action
    private readonly addApplication = (configuration: IConfiguration) => {
        const { kind, metadata } = configuration;
        if (kind !== WellKnownConfigurationKind.Application) {
            return;
        }

        const { annotations, description, name, namespace } = metadata;
        let category = namespace;
        let display = undefined;
        let icon = undefined;
        if (annotations !== undefined) {
            const dockAnnotations = annotations["@reactivemarkets/desktop-dock"] as IDockAnnotations | undefined;
            if (dockAnnotations?.excludeFromSearch) {
                return;
            }
            if (dockAnnotations?.category !== undefined) {
                category = dockAnnotations.category;
            }
            if (dockAnnotations?.display !== undefined) {
                display = dockAnnotations?.display;
            }
            if (dockAnnotations?.icon !== undefined) {
                icon = dockAnnotations?.icon;
            }
        }

        console.info("Adding application", configuration);

        const key = this.getKey(configuration);

        this.applicationMap.set(key, {
            category,
            configuration,
            description,
            display,
            icon,
            key,
            name,
        });
    };

    @action
    private readonly removeApplication = (configuration: IConfiguration) => {
        console.info("Removing application", configuration);

        const key = this.getKey(configuration);

        this.applicationMap.delete(key);
    };

    private readonly getKey = (configuration: IConfiguration) => {
        const { metadata } = configuration;

        const { name, namespace } = metadata;

        return `${namespace}/${name}`;
    };
}
