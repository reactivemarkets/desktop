import { ConfigurationKind } from "@reactivemarkets/desktop-types";
import { Output } from "../../configuration";

export interface IInitOptions {
    kind: ConfigurationKind;
    name?: string;
    output: Output;
    url: string;
}
