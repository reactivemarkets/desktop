import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, KeyboardEsc, KeyboardReturn } from "mdi-material-ui";
import * as React from "react";
import Key from "./Key";

const styles = (theme: Theme) =>
    createStyles({
        icon: {
            fontSize: 14,
        },
        item: {
            alignItems: "center",
            display: "flex",
        },
        root: {
            borderTop: `1px solid ${theme.palette.divider}`,
            margin: 0,
            padding: "0 0 0 8px",
        },
        text: {
            marginLeft: 4,
        },
    });

class SearchHelp extends React.PureComponent<WithStyles<typeof styles>> {
    public render() {
        const { classes } = this.props;

        return (
            <Grid className={classes.root} container spacing={2}>
                <Grid item className={classes.item}>
                    <Key>
                        <ArrowUp className={classes.icon} />
                    </Key>
                    <Key>
                        <ArrowDown className={classes.icon} />
                    </Key>
                    <Typography className={classes.text} variant="caption" color="textSecondary" noWrap>
                        Select results
                    </Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Key>
                        <ArrowLeft className={classes.icon} />
                    </Key>
                    <Key>
                        <ArrowRight className={classes.icon} />
                    </Key>
                    <Typography className={classes.text} variant="caption" color="textSecondary" noWrap>
                        Switch category
                    </Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Key>
                        <KeyboardReturn className={classes.icon} />
                    </Key>
                    <Typography className={classes.text} variant="caption" color="textSecondary">
                        Open
                    </Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Key>
                        <KeyboardEsc className={classes.icon} />
                    </Key>
                    <Typography className={classes.text} variant="caption" color="textSecondary">
                        Close
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SearchHelp);
