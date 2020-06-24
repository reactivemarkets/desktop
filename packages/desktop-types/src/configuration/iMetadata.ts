import { IAnnotations } from "./iAnnotations";

export interface IMetadata {
    readonly annotations?: IAnnotations;
    readonly description?: string;
    readonly name: string;
    readonly namespace?: string;
    readonly uid?: string;
}
