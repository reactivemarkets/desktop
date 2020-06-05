import { IApplication } from "../applications";

export interface ISearchResult {
    readonly item: IApplication;
    readonly refIndex: number;
    readonly score?: number;
}
