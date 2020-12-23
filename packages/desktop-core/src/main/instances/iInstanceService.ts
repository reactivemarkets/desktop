import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IInstanceService {
    /**
     * Get the configuration with the given uid
     * @param uid the instance uid
     */
    get(uid: string): IConfiguration | undefined;

    /**
     * List instances configuration.
     */
    list(): IConfiguration[];

    /**
     * Kill instancse
     * @param uid the instance uids
     */
    kill(uid: string[]): Promise<string[]>;

    /**
     * Restart instances
     * @param uid the instance uids
     */
    restart(uid: string[]): Promise<string[]>;

    /**
     * Stop instances.
     * @param uid the instance uids
     */
    stop(uid: string[]): Promise<string[]>;
}
