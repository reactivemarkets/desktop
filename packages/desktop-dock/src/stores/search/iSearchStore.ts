import { ISearchResult } from "./iSearchResult";

export interface ISearchStore {
    readonly error?: string;

    readonly results: readonly ISearchResult[];

    readonly searchTerm: string;

    clear(): void;

    search(searchTerm: string): void;
}
