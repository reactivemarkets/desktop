import * as React from "react";
import { AppTheme } from "./AppTheme";
import { AppShell } from "./AppShell";

export class App extends React.PureComponent {
    public render() {
        return (
            <AppTheme>
                <AppShell />
            </AppTheme>
        );
    }
}
