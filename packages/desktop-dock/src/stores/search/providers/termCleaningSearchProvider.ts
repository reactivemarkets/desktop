import { ISearchProvider } from "../iSearchProvider";

export class TermCleaningSearchProvider implements ISearchProvider {
    private readonly searchProvider: ISearchProvider;

    public constructor(searchProvider: ISearchProvider) {
        this.searchProvider = searchProvider;
    }

    public search(searchTerm?: string) {
        if (searchTerm === undefined) {
            return this.searchProvider.search();
        }

        const cleanedSearchTerm = searchTerm.trim();

        return this.searchProvider.search(cleanedSearchTerm);
    }
}
