import { ConfigurationKind } from "@reactivemarkets/desktop-types";

export interface IGeneratorOptions {
    readonly kind: ConfigurationKind;
    readonly name: string;
    readonly url?: string;
}
