import { Output } from "../../configuration";

export interface IVersionOptions {
    readonly context?: string;
    readonly output: Output;
}
