import * as React from "react";
import { Provider } from "mobx-react";
import { ObservableThemeStore } from "../../stores";

export class ThemeStoreProvider extends React.PureComponent {
    private readonly themeStore = new ObservableThemeStore();

    public render() {
        return <Provider themeStore={this.themeStore}>{this.props.children}</Provider>;
    }
}
