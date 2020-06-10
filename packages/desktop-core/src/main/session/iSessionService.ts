import { ISessionSpecification } from "@reactivemarkets/desktop-types";

export interface ISessionService {
    /**
     * Configure the session based on the given specification.
     * @param spec The session specification
     */
    configure(spec: ISessionSpecification): Promise<void>;
}
