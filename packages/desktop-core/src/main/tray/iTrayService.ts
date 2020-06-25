import { IConfiguration } from "@reactivemarkets/desktop-types";
import { TrayInstance } from "./trayInstance";

export interface ITrayService {
    /**
     * Get all current trays.
     */
    all(): TrayInstance[];

    /**
     * The window with the given `identifier`.
     * @param identifier A uid or application configuration.
     */
    from(identifier: string | IConfiguration): TrayInstance | undefined;

    /**
     * Create a `Tray` from the given `configuration`.
     * @param configuration The tray configuration
     */
    create(configuration: IConfiguration): Promise<TrayInstance>;
}
