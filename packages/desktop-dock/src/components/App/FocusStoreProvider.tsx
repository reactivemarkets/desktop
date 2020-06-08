import * as React from "react";
import { Provider } from "mobx-react";
import { EventingFocusStore } from "../../stores";

export class FocusStoreProvider extends React.PureComponent {
    private readonly focusStore = new EventingFocusStore();

    public render() {
        return <Provider focusStore={this.focusStore}>{this.props.children}</Provider>;
    }
}
