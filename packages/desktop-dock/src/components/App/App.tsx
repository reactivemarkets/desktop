import * as React from "react";
import { AppTheme } from "./AppTheme";
import { AppShell } from "./AppShell";
import { ApplicationsStoreProvider } from "./ApplicationsStoreProvider";
import { SearchStoreProvider } from "./SearchStoreProvider";

export class App extends React.PureComponent {
    public render() {
        return (
            <ApplicationsStoreProvider>
                <SearchStoreProvider>
                    <AppTheme>
                        <AppShell />
                    </AppTheme>
                </SearchStoreProvider>
            </ApplicationsStoreProvider>
        );
    }
}
