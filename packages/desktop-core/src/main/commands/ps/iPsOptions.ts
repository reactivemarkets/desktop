import { Output } from "../../configuration";

export interface IPsOptions {
    readonly kind: string;
    readonly namespace: string;
    readonly output: Output;
    readonly quiet: boolean;
}
