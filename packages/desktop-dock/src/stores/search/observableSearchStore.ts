import { ISearchStore } from "./iSearchStore";
import { ISearchResult } from "./iSearchResult";
import { observable, action, runInAction } from "mobx";
import { ISearchProvider } from "./iSearchProvider";

export class ObservableSearchStore implements ISearchStore {
    public results = observable.array<ISearchResult>([], { deep: false });

    @observable
    public error?: string;

    @observable
    public searchTerm = "";

    private readonly searchProvider: ISearchProvider;

    public constructor(searchProvider: ISearchProvider) {
        this.searchProvider = searchProvider;
    }

    @action
    public clear() {
        this.searchTerm = "";
    }

    @action
    public search(searchTerm: string) {
        this.searchTerm = searchTerm;

        this.searchProvider
            .search(searchTerm)
            .then((results) => {
                runInAction(() => {
                    this.results.replace(results);
                });
            })
            .catch((error) => {
                runInAction("ObservableSearchStore.Error", () => {
                    this.error = `${error}`;
                });
            });
    }
}
