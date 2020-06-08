import { IApplication } from "../applications";

export interface ISearchResult {
    readonly item: IApplication;
    readonly provider: string;
    readonly score?: number;
}
