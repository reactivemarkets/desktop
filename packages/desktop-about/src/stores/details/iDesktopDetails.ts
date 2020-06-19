import { IDesktopVersions } from "@reactivemarkets/desktop-sdk/lib/iDesktopVersions";

export interface IDesktopDetails {
    readonly appName: string;
    readonly appVersion: string;
    readonly versions: IDesktopVersions;
}
