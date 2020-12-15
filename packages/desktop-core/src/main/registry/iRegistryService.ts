import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IRegistryService {
    /**
     * Checks if the configuration object is already registered.
     * @param configuration A configuration object.
     */
    includes(configuration: IConfiguration): boolean;

    /**
     * Get the current registry.
     */
    getRegistry(): Promise<readonly IConfiguration[]>;

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
