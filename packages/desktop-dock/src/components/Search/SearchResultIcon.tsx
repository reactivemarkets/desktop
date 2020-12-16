import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";

const styles = () =>
    createStyles({
        img: {
            width: "100%",
            height: "100%",
            textAlign: "center",
            objectFit: "cover",
            color: "transparent",
        },
        root: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: 16,
            height: 16,
        },
    });

interface SearchResultIconProps extends WithStyles<typeof styles> {
    readonly src?: string;
}

class SearchResultIcon extends React.PureComponent<SearchResultIconProps> {
    public render() {
        const { classes, src } = this.props;

        if (src === undefined) {
            return null;
        }

        return (
            <div className={classes.root}>
                <img src={src} />
            </div>
        );
    }
}

export default withStyles(styles)(SearchResultIcon);
