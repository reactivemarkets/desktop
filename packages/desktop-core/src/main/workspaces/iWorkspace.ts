import { IConfiguration } from "@reactivemarkets/desktop-types";

export interface IWorkspace {
    readonly instances: readonly IConfiguration[];
    readonly name: string;
    readonly uid: string;
}
