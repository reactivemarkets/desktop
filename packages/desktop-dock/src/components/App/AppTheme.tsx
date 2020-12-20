import {
    createGenerateClassName,
    createMuiTheme,
    MuiThemeProvider,
    StylesProvider,
    CssBaseline,
} from "@material-ui/core";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IThemeStore } from "../../stores";

const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: "d",
});

interface IAppThemeProps {
    readonly themeStore?: IThemeStore;
}

@inject("themeStore")
@observer
export class AppTheme extends React.Component<IAppThemeProps> {
    @computed
    private get currentThemeOptions() {
        const { current } = this.props.themeStore!;

        return createMuiTheme(current);
    }

    public render() {
        return (
            <StylesProvider generateClassName={generateClassName}>
                <MuiThemeProvider theme={this.currentThemeOptions}>
                    <CssBaseline />
                    {this.props.children}
                </MuiThemeProvider>
            </StylesProvider>
        );
    }
}
