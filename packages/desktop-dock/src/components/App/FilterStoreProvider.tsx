import * as React from "react";
import { Provider } from "mobx-react";
import { ObservableFilterStore } from "../../stores";

export class FilterStoreProvider extends React.PureComponent {
    private readonly filterStore = new ObservableFilterStore();

    public render() {
        return <Provider filterStore={this.filterStore}>{this.props.children}</Provider>;
    }
}
