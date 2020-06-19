import { ConfigurationKind } from "./configurationKind";
import { IApplicationSpecification } from "./iApplicationSpecification";
import { IExternalSpecification } from "./iExternalSpecification";
import { IMetadata } from "./iMetadata";
import { IServiceSpecification } from "./iServiceSpecification";
import { ISessionSpecification } from "./iSessionSpecification";
import { IStorageSpecification } from "./iStorageSpecification";
import { ITraySpecification } from "./iTraySpecification";
import { IApplicationStatus } from "./iApplicationStatus";
import { IExternalStatus } from "./iExternalStatus";
import { IServiceStatus } from "./iServiceStatus";
import { IStorageStatus } from "./iStorageStatus";
import { IAnnotations } from "./iAnnotations";

type Spec =
    | IApplicationSpecification
    | IExternalSpecification
    | IServiceSpecification
    | ISessionSpecification
    | IStorageSpecification
    | ITraySpecification;

type Status = IApplicationStatus | IExternalStatus | IServiceStatus | IStorageStatus;

export interface IConfiguration {
    readonly annotations?: IAnnotations;
    readonly apiVersion?: string;
    readonly kind: ConfigurationKind;
    readonly metadata: IMetadata;
    readonly spec: Spec;
    readonly status?: Status;
}
