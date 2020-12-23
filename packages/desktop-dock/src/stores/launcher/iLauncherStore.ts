import { IConfiguration } from "@reactivemarkets/desktop-sdk";

export interface ILauncherStore {
    launch(application: IConfiguration): Promise<void>;
}
