import * as React from "react";
import { Provider } from "mobx-react";
import { ObservableTabStore } from "../../stores";

export class TabStoreProvider extends React.PureComponent {
    private readonly tabStore = new ObservableTabStore();

    public render() {
        return <Provider tabStore={this.tabStore}>{this.props.children}</Provider>;
    }
}
