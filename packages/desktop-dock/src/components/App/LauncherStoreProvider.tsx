import * as React from "react";
import { Provider } from "mobx-react";
import { RepositioningLauncherStore } from "../../stores";

export class LauncherStoreProvider extends React.PureComponent {
    private readonly launcherStore = new RepositioningLauncherStore();

    public render() {
        return <Provider launcherStore={this.launcherStore}>{this.props.children}</Provider>;
    }
}
