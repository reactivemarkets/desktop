import * as React from "react";
import { AppShell } from "./AppShell";
import { AppTheme } from "./AppTheme";
import { ApplicationsStoreProvider } from "./ApplicationsStoreProvider";
import { FocusStoreProvider } from "./FocusStoreProvider";
import { ResizerStoreProvider } from "./ResizerStoreProvider";
import { FilterStoreProvider } from "./FilterStoreProvider";
import { SearchStoreProvider } from "./SearchStoreProvider";
import { ThemeStoreProvider } from "./ThemeStoreProvider";
import { TabStoreProvider } from "./TabStoreProvider";
import { AppGlobalShortcut } from "./AppGlobalShortcut";

export class App extends React.PureComponent {
    public render() {
        return (
            <FocusStoreProvider>
                <FilterStoreProvider>
                    <ResizerStoreProvider>
                        <ApplicationsStoreProvider>
                            <SearchStoreProvider>
                                <TabStoreProvider>
                                    <ThemeStoreProvider>
                                        <AppTheme>
                                            <AppGlobalShortcut />
                                            <AppShell />
                                        </AppTheme>
                                    </ThemeStoreProvider>
                                </TabStoreProvider>
                            </SearchStoreProvider>
                        </ApplicationsStoreProvider>
                    </ResizerStoreProvider>
                </FilterStoreProvider>
            </FocusStoreProvider>
        );
    }
}
