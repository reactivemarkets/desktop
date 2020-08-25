import { IStorageParameters } from "./iStorageParameters";

export interface IStorageSpecification {
    /**
     * A key value map that can be used to store parameters for the provisioner.
     */
    parameters?: IStorageParameters;
    /**
     * The storage provisioner to use to create storage.
     */
    provisioner: string;
}
