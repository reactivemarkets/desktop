import { ConfigurationKind, Output } from "../../configuration";

export interface IInitOptions {
    kind: ConfigurationKind;
    name?: string;
    output: Output;
    url: string;
}
