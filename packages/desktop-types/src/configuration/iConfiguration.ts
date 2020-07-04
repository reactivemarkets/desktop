import { ConfigurationKind } from "./configurationKind";
import { IApplicationSecurityPolicySpecification } from "./iApplicationSecurityPolicySpecification";
import { IApplicationSpecification } from "./iApplicationSpecification";
import { IApplicationStatus } from "./iApplicationStatus";
import { IExternalSecurityPolicySpecification } from "./iExternalSecurityPolicySpecification";
import { IExternalSpecification } from "./iExternalSpecification";
import { IExternalStatus } from "./iExternalStatus";
import { IMetadata } from "./iMetadata";
import { IServiceSecurityPolicySpecification } from "./iServiceSecurityPolicySpecification";
import { IServiceSpecification } from "./iServiceSpecification";
import { IServiceStatus } from "./iServiceStatus";
import { ISessionSpecification } from "./iSessionSpecification";
import { IStorageSpecification } from "./iStorageSpecification";
import { IStorageStatus } from "./iStorageStatus";
import { ITraySpecification } from "./iTraySpecification";
import { ITrayStatus } from "./iTrayStatus";
import { IUpdateSpecification } from "./iUpdateSpecification";

type Spec =
    | IApplicationSpecification
    | IApplicationSecurityPolicySpecification
    | IExternalSpecification
    | IExternalSecurityPolicySpecification
    | IServiceSpecification
    | IServiceSecurityPolicySpecification
    | ISessionSpecification
    | IStorageSpecification
    | ITraySpecification
    | IUpdateSpecification;

type Status = IApplicationStatus | IExternalStatus | IServiceStatus | IStorageStatus | ITrayStatus;

export interface IConfiguration {
    readonly apiVersion?: string;
    readonly kind: ConfigurationKind;
    readonly metadata: IMetadata;
    readonly spec: Spec;
    readonly status?: Status;
}
