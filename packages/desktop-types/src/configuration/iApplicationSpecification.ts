import { IWindowParameters } from "./iWindowParameters";
import { IWebPreferences } from "./iWebPreferences";

export interface IApplicationSpecification {
    readonly contentProtection?: boolean;
    readonly excludeFromWorkspace?: boolean;
    readonly launchOnStart?: boolean;
    readonly singleInstance?: boolean;
    readonly url: string;
    readonly webPreferences?: IWebPreferences;
    readonly window?: IWindowParameters;
}
