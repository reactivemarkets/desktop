import { IConfiguration } from "../configuration";

export interface ILauncherService {

    /**
     * Returns whether the configuration can be launched.
     * @param configuration A configuration file
     */
    canLaunch(configuration: IConfiguration): boolean;

    /**
     * Launches a given configuration. By convention you should call
     * @method canLaunch before calling this method.
     * @param configuration A configuration file
     */
    launch(configuration: IConfiguration): Promise<IConfiguration>;
}
