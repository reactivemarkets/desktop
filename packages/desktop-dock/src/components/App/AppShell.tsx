import { Box, Grid } from "@material-ui/core";
import * as React from "react";
import { Search, SearchResults } from "../Search";
import { PowerButton } from "../System";

export class AppShell extends React.PureComponent {
    public render() {
        return (
            <>
                <Box padding={1} display="flex" flex={1}>
                    <Grid container wrap="nowrap">
                        <Search />
                        <PowerButton />
                    </Grid>
                </Box>
                <SearchResults />
            </>
        );
    }
}
