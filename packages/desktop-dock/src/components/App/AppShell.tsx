import { createStyles, Box, Grid, Theme, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import { Search, SearchHelp, SearchResults } from "../Search";
import { DragHandle, PowerButton } from "../System";

const styles = (theme: Theme) =>
    createStyles({
        padding: {
            padding: theme.spacing(1, 1, 1, 0),
        },
    });

class AppShell extends React.PureComponent<WithStyles<typeof styles>> {
    public render() {
        const { classes } = this.props;

        return (
            <Box display="flex" flexDirection="column" flex={1}>
                <Grid container wrap="nowrap">
                    <DragHandle />
                    <Grid className={classes.padding} container wrap="nowrap">
                        <Search />
                        <PowerButton />
                    </Grid>
                </Grid>
                <SearchResults />
                <SearchHelp />
            </Box>
        );
    }
}

export default withStyles(styles)(AppShell);
