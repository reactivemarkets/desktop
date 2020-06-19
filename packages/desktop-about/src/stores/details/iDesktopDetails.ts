import { IDesktopVersions } from "@reactivemarkets/desktop-sdk/lib/iDesktopVersions";

export interface IDesktopDetails {
    readonly name: string;
    readonly appVersion: string;
    readonly versions: IDesktopVersions;
}
