import * as React from "react";
import { Provider } from "mobx-react";
import { ObservableSearchStore } from "../../stores";

export class SearchStoreProvider extends React.PureComponent {
    private readonly searchStore = new ObservableSearchStore();

    public render() {
        return <Provider searchStore={this.searchStore}>{this.props.children}</Provider>;
    }
}
