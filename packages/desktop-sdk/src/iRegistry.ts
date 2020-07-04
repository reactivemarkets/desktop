import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IRegistry {
    /**
     * List all registered applications in the given namespace.
     * @param namespace The namespace to search
     */
    listApplications(namespace?: string): Promise<IConfiguration[]>;

    /**
     * Register a new configuration object.
     * @param configuration The configuration
     */
    register(configuration: IConfiguration): Promise<void>;

    /**
     * Unregister a previously registered configuation object. This will not stop
     * anything currently running.
     * @param configuration The configuration
     */
    unregister(configuration: IConfiguration): Promise<void>;
}
