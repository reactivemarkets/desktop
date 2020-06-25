import { IConfiguration } from "@reactivemarkets/desktop-types";
import { Tray } from "electron";

export interface ITrayFactory {
    create(configuration: IConfiguration): Promise<Tray>;
}
