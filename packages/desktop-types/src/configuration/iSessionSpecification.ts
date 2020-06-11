import { ISessionParameters } from "./iSessionParameters";

export interface ISessionSpecification {
    readonly parameters: ISessionParameters;
    readonly partition?: string;
}
