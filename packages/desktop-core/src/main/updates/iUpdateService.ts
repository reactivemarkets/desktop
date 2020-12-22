import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IUpdateService {
    /**
     * Configure updates based on the given `configuration`.
     * @param configuration The update configuration.
     */
    create(configuration: IConfiguration): Promise<IConfiguration>;
}
