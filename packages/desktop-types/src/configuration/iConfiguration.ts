import { ConfigurationKind } from "./configurationKind";
import { IApplicationSpecification } from "./iApplicationSpecification";
import { IExternalSpecification } from "./iExternalSpecification";
import { IMetadata } from "./iMetadata";
import { IServiceSpecification } from "./iServiceSpecification";
import { ISessionSpecification } from "./iSessionSpecification";
import { IStorageSpecification } from "./iStorageSpecification";
import { ITraySpecification } from "./iTraySpecification";

type Spec =
    | IApplicationSpecification
    | IExternalSpecification
    | IServiceSpecification
    | ISessionSpecification
    | IStorageSpecification
    | ITraySpecification;

export interface IConfiguration {
    readonly apiVersion?: string;
    readonly kind: ConfigurationKind;
    readonly metadata: IMetadata;
    readonly spec: Spec;
}
