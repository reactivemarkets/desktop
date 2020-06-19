import * as React from "react";
import { Provider } from "mobx-react";
import { ObservableDesktopDetailsStore } from "../../stores";

export class DesktopDetailsStoreProvider extends React.PureComponent {
    private readonly detailsStore = new ObservableDesktopDetailsStore();

    public componentDidMount() {
        this.detailsStore.load();
    }

    public render() {
        return <Provider detailsStore={this.detailsStore}>{this.props.children}</Provider>;
    }
}
