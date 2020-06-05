import { ISearchProvider } from "../iSearchProvider";

export class OrderedSearchProvider implements ISearchProvider {
    private readonly searchProvider: ISearchProvider;

    public constructor(searchProvider: ISearchProvider) {
        this.searchProvider = searchProvider;
    }

    public async search(searchTerm?: string) {
        const results = await this.searchProvider.search(searchTerm);

        return results.sort((a, b) => {
            if (a.score === undefined) {
                return 1;
            }

            if (b.score === undefined) {
                return -1;
            }

            if (a.score < b.score) {
                return -1;
            }

            if (a.score > b.score) {
                return 1;
            }

            return 0;
        });
    }
}
