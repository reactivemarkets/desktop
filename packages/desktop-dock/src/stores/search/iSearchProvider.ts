import { ISearchResult } from "./iSearchResult";

export interface ISearchProvider {
    search(searchTerm?: string): Promise<ISearchResult[]>;
}
