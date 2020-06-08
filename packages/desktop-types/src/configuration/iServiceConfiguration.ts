import { IServiceOptionsConfiguration } from "./iServiceOptionsConfiguration";

export interface IServiceConfiguration {
    readonly main: string;
    readonly options?: IServiceOptionsConfiguration;
}
