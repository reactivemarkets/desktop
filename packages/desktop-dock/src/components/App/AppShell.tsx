import { Box } from "@material-ui/core";
import * as React from "react";
import { Search, SearchButton, SearchHelp } from "../Search";
import { DragHandle, PowerButton } from "../System";

export class AppShell extends React.PureComponent {
    public render() {
        return (
            <Box display="flex" flexDirection="column" flex={1}>
                <Search
                    startAdornment={
                        <>
                            <DragHandle />
                            <SearchButton />
                        </>
                    }
                    endAdornment={<PowerButton />}
                />
                <SearchHelp />
            </Box>
        );
    }
}
