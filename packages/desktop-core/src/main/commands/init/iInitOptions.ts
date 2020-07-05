import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { Output } from "../../configuration";

export interface IInitOptions {
    readonly kind: WellKnownConfigurationKind;
    readonly name?: string;
    readonly output: Output;
    readonly url: string;
}
