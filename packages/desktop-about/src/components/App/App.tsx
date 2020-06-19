import * as React from "react";
import AppShell from "./AppShell";
import { AppTheme } from "./AppTheme";
import { DesktopDetailsStoreProvider } from "./DesktopDetailsStoreProvider";

export class App extends React.PureComponent {
    public render() {
        return (
            <DesktopDetailsStoreProvider>
                <AppTheme>
                    <AppShell />
                </AppTheme>
            </DesktopDetailsStoreProvider>
        );
    }
}
