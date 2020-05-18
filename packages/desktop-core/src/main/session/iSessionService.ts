import { ISessionConfiguration } from "../configuration";

export interface ISessionService {
    /**
     * Configure the session based on the given configuration.
     * @param configuration The session configuration
     */
    configureSession(configuration: ISessionConfiguration): Promise<void>;
}
