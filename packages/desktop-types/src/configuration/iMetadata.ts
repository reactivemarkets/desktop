import { IAnnotations } from "./iAnnotations";

export interface IMetadata {
    /**
     * A key value map that can be used to store arbitrary metadata.
     */
    readonly annotations?: IAnnotations;
    /**
     * Identifer for this configuration object.
     */
    readonly description?: string;
    /**
     * Name of this object, it must be unique within a namespace.
     */
    readonly name: string;
    /**
     * Namespace this object lives in, if not provided will be "default".
     */
    readonly namespace?: string;
    /**
     * Unique identifier automatically populated by Desktop.
     */
    readonly uid?: string;
}
