import * as React from "react";
import { Provider } from "mobx-react";
import { DesktopResizerStore } from "../../stores";

export class ResizerStoreProvider extends React.PureComponent {
    private readonly resizerStore = new DesktopResizerStore();

    public render() {
        return <Provider resizerStore={this.resizerStore}>{this.props.children}</Provider>;
    }
}
