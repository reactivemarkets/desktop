import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface ILauncher {
    launch(configuration: IConfiguration): Promise<IConfiguration>;
}
