import { ISearchProvider } from "../iSearchProvider";

export class MaxScoreSearchProvider implements ISearchProvider {
    private readonly maxScore: number;
    private readonly searchProvider: ISearchProvider;

    public constructor(searchProvider: ISearchProvider, maxScore: number) {
        this.searchProvider = searchProvider;
        this.maxScore = maxScore;
    }

    public async search(searchTerm?: string) {
        const results = await this.searchProvider.search(searchTerm);

        return results.filter(({ score }) => {
            if (score === undefined) {
                return false;
            }

            return score < this.maxScore;
        });
    }
}
