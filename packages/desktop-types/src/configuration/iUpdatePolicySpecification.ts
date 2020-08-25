import { IUpdateParameters } from "./iUpdateParameters";

export interface IUpdatePolicySpecification {
    /**
     * Whether to allow version downgrade (when a user from the beta channel wants to go back to the stable channel).
     */
    readonly allowDowngrade?: boolean;

    /**
     * Whether to allow update to pre-release versions.
     */
    readonly allowPrerelease?: boolean;

    /**
     * Sets the channel to recieve updates from.
     */
    readonly channel?: string;

    /**
     * Whether to check for updates.
     */
    readonly checkForUpdates?: boolean;

    /**
     * Key value map to override parameters in the specified update provider.
     */
    readonly parameters?: IUpdateParameters;

    /**
     * The update source.
     */
    readonly provider?: "generic" | "github" | "s3";
}
