import { createStyles, Box, Theme, withStyles, WithStyles } from "@material-ui/core";
import { Drag } from "mdi-material-ui";
import * as React from "react";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            alignItems: "center",
            cursor: "move",
            display: "flex",
            padding: theme.spacing(1, 0, 1, 1),
        },
    });

class DragHandle extends React.PureComponent<WithStyles<typeof styles>> {
    public render() {
        const { classes } = this.props;

        return (
            <Box className={`drag ${classes.root}`}>
                <Drag />
            </Box>
        );
    }
}

export default withStyles(styles)(DragHandle);
