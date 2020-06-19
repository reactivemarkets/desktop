import { IDesktopDetails } from "./iDesktopDetails";

export interface IDesktopDetailsStore {
    readonly details?: IDesktopDetails;

    load(): void;
}
