import { createStyles, Typography, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";

const styles = createStyles({
    title: {
        fontWeight: 800,
        minWidth: 100,
    },
});

interface ITitleProps extends WithStyles<typeof styles> {
    readonly color?: "textPrimary" | "textSecondary";
}

class Title extends React.PureComponent<ITitleProps> {
    public render() {
        const { classes, color } = this.props;

        return (
            <Typography color={color} className={classes.title} variant="body1">
                {this.props.children}
            </Typography>
        );
    }
}

export default withStyles(styles)(Title);
