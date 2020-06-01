import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IRegistryService {
    /**
     * Get the current registry.
     */
    getRegistry(): Promise<IConfiguration[]>;

    /**
     * Register configuration.
     * @param configuration A configuration object.
     */
    register(configuration: IConfiguration): Promise<void>;

    /**
     * Unregister configuration.
     * @param configuration A configuration object.
     */
    unregister(configuration: IConfiguration): Promise<void>;
}
