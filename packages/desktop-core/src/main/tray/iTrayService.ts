import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface ITrayService {
    create(configuration: IConfiguration): Promise<void>;
}
