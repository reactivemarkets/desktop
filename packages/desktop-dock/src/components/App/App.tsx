import * as React from "react";
import AppShell from "./AppShell";
import { AppTheme } from "./AppTheme";
import { ApplicationsStoreProvider } from "./ApplicationsStoreProvider";
import { FocusStoreProvider } from "./FocusStoreProvider";
import { ResizerStoreProvider } from "./ResizerStoreProvider";
import { SearchStoreProvider } from "./SearchStoreProvider";

export class App extends React.PureComponent {
    public render() {
        return (
            <FocusStoreProvider>
                <ResizerStoreProvider>
                    <ApplicationsStoreProvider>
                        <SearchStoreProvider>
                            <AppTheme>
                                <AppShell />
                            </AppTheme>
                        </SearchStoreProvider>
                    </ApplicationsStoreProvider>
                </ResizerStoreProvider>
            </FocusStoreProvider>
        );
    }
}
