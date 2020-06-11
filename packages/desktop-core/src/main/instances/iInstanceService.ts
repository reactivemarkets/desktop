import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IInstanceService {
    list(): IConfiguration[];
    kill(uid: string): Promise<void>;
    restart(uid: string): Promise<void>;
    stop(uid: string): Promise<void>;
}
