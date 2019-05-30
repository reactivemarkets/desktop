import { IWindowConfiguration } from "./iWindowConfiguration";

export interface IApplicationConfiguration {
    readonly url: string;
    readonly window?: IWindowConfiguration;
}
