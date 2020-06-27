import { createStyles, Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import Title from "./Title";

const styles = createStyles({
    select: {
        userSelect: "text",
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
                    <Title color={color}>{title}</Title>
                </Grid>
                <Grid item className="no-drag">
                    <Typography color={color} className={classes.select} variant="body1">
                        {value}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TitleValue);
