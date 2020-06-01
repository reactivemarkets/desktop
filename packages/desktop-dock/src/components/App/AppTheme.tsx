import {
    createGenerateClassName,
    createMuiTheme,
    MuiThemeProvider,
    StylesProvider,
    CssBaseline,
} from "@material-ui/core";
import { computed } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { defaultTheme } from "./defaultTheme";

const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: "d",
});

@observer
export class AppTheme extends React.Component {
    @computed
    private get currentThemeOptions() {
        return createMuiTheme(defaultTheme);
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
