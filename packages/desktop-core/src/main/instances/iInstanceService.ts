import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IInstanceService {
    get(uid: string): IConfiguration | undefined;
    list(): IConfiguration[];
    kill(uid: string[]): Promise<string[]>;
    restart(uid: string[]): Promise<string[]>;
    stop(uid: string[]): Promise<string[]>;
}
