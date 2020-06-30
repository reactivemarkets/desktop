import { IConfiguration } from "@reactivemarkets/desktop-types";
import { WindowInstance } from "./windowInstance";

export interface IWindowService {
    /**
     * Get all current windows.
     */
    all(): WindowInstance[];

    /**
     * The window with the given `identifier`.
     * @param identifier A uid, window id or application configuration.
     */
    from(identifier: number | string | IConfiguration): WindowInstance | undefined;

    /**
     * Create a `WindowInstance` from the given `configuration`.
     * @param configuration The application configuration
     */
    create(configuration: IConfiguration): Promise<WindowInstance>;
}
