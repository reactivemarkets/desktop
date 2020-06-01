import { ObservableApplicationsStore } from "./applications";

export * from "./applications";

export const stores = {
    applicationsStore: new ObservableApplicationsStore(),
};
