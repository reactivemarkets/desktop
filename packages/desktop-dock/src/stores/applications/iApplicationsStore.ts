import { IApplication } from "./iApplication";

export interface IApplicationsStore {
    readonly applications: readonly IApplication[];
    readonly categories: readonly string[];

    load(): void;

    remove(application: IApplication): Promise<void>;
}
