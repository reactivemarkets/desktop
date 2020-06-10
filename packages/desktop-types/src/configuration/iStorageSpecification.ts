import { IStorageParameters } from "./iStorageParameters";

export interface IStorageSpecification {
    parameters?: IStorageParameters;
    provisioner: string;
}
