import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface ILauncher {
    /**
     * Launch the given configuration.
     * @param configuration The configuration
     */
    launch(configuration: IConfiguration): Promise<IConfiguration>;
}
