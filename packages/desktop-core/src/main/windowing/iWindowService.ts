import { IConfiguration } from "@reactivemarkets/desktop-types";
import { WindowInstance } from "./windowInstance";

export interface IWindowService {
    /**
     * Get all current windows.
     */
    all(): WindowInstance[];

    /**
     * The window with the given `identifier`.
     * @param identifier A uid or application configuration.
     */
    from(identifier: string | IConfiguration): WindowInstance | undefined;

    /**
     * Create a BrowserWindow from the given `configuration`.
     * @param configuration The application configuration
     */
    create(configuration: IConfiguration): Promise<WindowInstance>;
}
