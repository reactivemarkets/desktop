import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";

export interface IGeneratorOptions {
    readonly description?: string;
    readonly kind: WellKnownConfigurationKind;
    readonly name: string;
    readonly url?: string;
}
