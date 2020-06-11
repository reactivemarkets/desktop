import { IWindowParameters } from "./iWindowParameters";
import { IWebPreferences } from "./iWebPreferences";

export interface IApplicationSpecification {
    readonly contentProtection?: boolean;
    readonly url: string;
    readonly webPreferences?: IWebPreferences;
    readonly window?: IWindowParameters;
}
