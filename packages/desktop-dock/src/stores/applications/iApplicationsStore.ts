import { IApplication } from "./iApplication";

export interface IApplicationsStore {
    readonly applications: readonly IApplication[];

    load(): void;

    remove(application: IApplication): Promise<void>;
}
