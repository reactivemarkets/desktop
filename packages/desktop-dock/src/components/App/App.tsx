import * as React from "react";
import { AppTheme } from "./AppTheme";
import { AppShell } from "./AppShell";
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
