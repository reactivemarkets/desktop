import { ConfigurationKind } from "@reactivemarkets/desktop-types";
import { Output } from "../../configuration";

export interface IInitOptions {
    readonly kind: ConfigurationKind;
    readonly name?: string;
    readonly output: Output;
    readonly url: string;
}
