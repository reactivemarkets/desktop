import { IWindowParameters } from "./iWindowParameters";

export interface IApplicationSpecification {
    readonly affinity?: string;
    readonly devTools?: boolean;
    readonly url: string;
    readonly window?: IWindowParameters;
}
