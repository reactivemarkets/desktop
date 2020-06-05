import * as React from "react";
import { Provider } from "mobx-react";
import { ObservableApplicationsStore } from "../../stores";

export class ApplicationsStoreProvider extends React.PureComponent {
    private readonly applicationsStore = new ObservableApplicationsStore();

    public componentDidMount() {
        this.applicationsStore.load();
    }

    public render() {
        return <Provider applicationsStore={this.applicationsStore}>{this.props.children}</Provider>;
    }
}
