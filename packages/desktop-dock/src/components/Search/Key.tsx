import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            alignItems: "center",
            background: theme.palette.action.disabledBackground,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadius,
            display: "flex",
            justifyContent: "center",
            margin: 1,
            padding: 2,
        },
    });

class Key extends React.PureComponent<WithStyles<typeof styles>> {
    public render() {
        const { children, classes } = this.props;

        return <div className={classes.root}>{children}</div>;
    }
}

export default withStyles(styles)(Key);
