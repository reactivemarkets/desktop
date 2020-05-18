import { ConfigurationKind } from "./configurationKind";
import { IApplicationConfiguration } from "./iApplicationConfiguration";
import { IExternalConfiguration } from "./iExternalConfiguration";
import { IMetadata } from "./iMetadata";
import { IServiceConfiguration } from "./iServiceConfiguration";
import { ISessionConfiguration } from "./iSessionConfiguration";

type Spec = IApplicationConfiguration | IExternalConfiguration | IServiceConfiguration | ISessionConfiguration;

export interface IConfiguration {
    readonly kind: ConfigurationKind;
    readonly metadata: IMetadata;
    readonly spec: Spec;
}
