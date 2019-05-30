import { IServiceOptionsConfiguration } from "./iServiceOptionsConfiguration";
import { ServiceHost } from "./serviceHost";

export interface IServiceConfiguration {
    readonly affinity?: string;
    readonly host: ServiceHost;
    readonly main: string;
    readonly options?: IServiceOptionsConfiguration;
}
