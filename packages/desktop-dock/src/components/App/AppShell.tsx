import { Box, Grid } from "@material-ui/core";
import * as React from "react";
import { Search, SearchResults } from "../Search";
import { PowerButton } from "../System";

export class AppShell extends React.PureComponent {
    public render() {
        return (
            <Box display="flex" flexDirection="column" flex={1}>
                <Box padding={1}>
                    <Grid className="drag" container wrap="nowrap">
                        <Search />
                        <PowerButton />
                    </Grid>
                </Box>
                <SearchResults />
            </Box>
        );
    }
}
