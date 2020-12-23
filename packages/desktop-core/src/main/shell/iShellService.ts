export interface IShellService {
    /**
     * Open the given external protocol URL in the OS's default manner.
     * @param url the url to open
     */
    openExternal(url: string): Promise<void>;
}
