import { IConfiguration } from "@reactivemarkets/desktop-sdk";
import { IApplication } from "./iApplication";

export interface IApplicationsStore {
    readonly applications: readonly IApplication[];
    readonly categories: readonly string[];

    load(): void;

    launch(application: IApplication): Promise<IConfiguration>;
    remove(application: IApplication): Promise<void>;
}
