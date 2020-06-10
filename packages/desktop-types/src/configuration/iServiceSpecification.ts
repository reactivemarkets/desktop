import { IServiceParameters } from "./iServiceParameters";

export interface IServiceSpecification {
    readonly main: string;
    readonly parameters?: IServiceParameters;
}
