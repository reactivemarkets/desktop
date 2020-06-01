import { ISessionConfiguration } from "@reactivemarkets/desktop-types";

export interface ISessionService {
    /**
     * Configure the session based on the given configuration.
     * @param configuration The session configuration
     */
    configure(configuration: ISessionConfiguration): Promise<void>;
}
