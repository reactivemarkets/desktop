import { createStyles, IconButton, ClickAwayListener, Theme, Tooltip, withStyles, WithStyles } from "@material-ui/core";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

const styles = (theme: Theme) =>
    createStyles({
        confirm: {
            "&:hover": {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.contrastText,
            },
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
        },
    });

interface IConfirmButtonProps extends WithStyles<typeof styles> {
    readonly edge?: false | "end" | "start";
    readonly onClick: (event: React.MouseEvent) => void;
    readonly size?: "small" | "medium";
    readonly title: string;
}

@observer
class ConfirmButton extends React.Component<IConfirmButtonProps> {
    @observable
    private confirm = false;

    public render() {
        const { children, classes, edge, size, title } = this.props;

        const className = this.confirm ? classes.confirm : undefined;

        return (
            <ClickAwayListener onClickAway={this.onClickAway}>
                <Tooltip title={title} placement="left">
                    <IconButton className={className} edge={edge} size={size} onClick={this.onClick}>
                        {children}
                    </IconButton>
                </Tooltip>
            </ClickAwayListener>
        );
    }

    @action
    private readonly onClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (!this.confirm) {
            this.confirm = true;

            return;
        }

        this.confirm = false;

        this.props.onClick(event);
    };

    @action
    private readonly onClickAway = () => {
        this.confirm = false;
    };
}

export default withStyles(styles)(ConfirmButton);
