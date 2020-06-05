import * as React from "react";
import { Provider, inject } from "mobx-react";
import { ISearchStore, IApplicationsStore, ObservableSearchStore, createSearchProvider } from "../../stores";

interface ISearchStoreProviderProps {
    readonly applicationsStore?: IApplicationsStore;
}

@inject("applicationsStore")
export class SearchStoreProvider extends React.PureComponent<ISearchStoreProviderProps> {
    private readonly searchStore: ISearchStore;

    public constructor(props: ISearchStoreProviderProps) {
        super(props);

        const searchProvider = createSearchProvider(props.applicationsStore!);

        this.searchStore = new ObservableSearchStore(searchProvider);
    }

    public render() {
        return <Provider searchStore={this.searchStore}>{this.props.children}</Provider>;
    }
}
