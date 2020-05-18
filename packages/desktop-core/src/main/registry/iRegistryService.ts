import { IConfiguration } from "../configuration";

export interface IRegistryService {
    /**
     * Get the current registry.
     */
    getRegistry(): Promise<IConfiguration[]>;

    /**
     * Register a configuration file or directory.
     * @param path Path to the configuration file or directory.
     */
    registerConfig(path: string): Promise<void>;

    /**
     * Registers a url to a window. This will generate a basic configuration
     * based on the url.
     * @param url The url of a window.
     */
    registerUrl(url: string): Promise<void>;
}
