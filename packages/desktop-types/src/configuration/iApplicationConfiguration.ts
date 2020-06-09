import { IWindowConfiguration } from "./iWindowConfiguration";

export interface IApplicationConfiguration {
    readonly affinity?: string;
    readonly devTools?: boolean;
    readonly url: string;
    readonly window?: IWindowConfiguration;
}
