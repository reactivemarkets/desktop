import { createStyles, Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";

const styles = createStyles({
    title: {
        fontWeight: 800,
        minWidth: 100,
    },
});

interface ITitleValueProps extends WithStyles<typeof styles> {
    readonly color?: "textPrimary" | "textSecondary";
    readonly title: string;
    readonly value: string;
}

class TitleValue extends React.PureComponent<ITitleValueProps> {
    public render() {
        const { classes, color, title, value } = this.props;

        return (
            <Grid item container xs={6} spacing={2}>
                <Grid item>
                    <Typography color={color} className={classes.title} variant="body1">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color={color} variant="body1">
                        {value}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TitleValue);
