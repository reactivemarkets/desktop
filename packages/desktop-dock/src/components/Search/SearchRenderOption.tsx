import {
    createStyles,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    withStyles,
    WithStyles,
} from "@material-ui/core";
import { Close } from "mdi-material-ui";
import { inject } from "mobx-react";
import * as React from "react";
import { IApplicationsStore, IApplication } from "../../stores";
import { ConfirmButton } from "../System";
import SearchResultIcon from "./SearchResultIcon";

const styles = () =>
    createStyles({
        root: {
            "&:hover $clearIndicator": {
                visibility: "visible",
            },
            width: "100%",
        },
        clearIndicator: {
            visibility: "hidden",
        },
    });

interface ISearchRenderOptionProps extends WithStyles<typeof styles> {
    readonly applicationsStore?: IApplicationsStore;
    readonly result: IApplication;
    readonly selected?: boolean;
}

@inject("applicationsStore")
class SearchRenderOption extends React.PureComponent<ISearchRenderOptionProps> {
    public render() {
        const { classes, result, selected } = this.props;

        const { display, name, icon, description } = result;

        const primary = display ?? name;

        return (
            <ListItem
                ContainerProps={{ className: classes.root }}
                ContainerComponent="div"
                button
                dense
                selected={selected}
                onClick={this.onClick}
            >
                {icon && (
                    <ListItemIcon>
                        <SearchResultIcon src={icon} />
                    </ListItemIcon>
                )}
                <ListItemText
                    inset={icon === undefined}
                    primary={primary}
                    secondary={description}
                    secondaryTypographyProps={{
                        variant: "caption",
                    }}
                />
                <ListItemSecondaryAction className={classes.clearIndicator}>
                    <ConfirmButton edge="end" size="small" title="Remove Application" onClick={this.remove}>
                        <Close fontSize="small" />
                    </ConfirmButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    private readonly onClick = async () => {
        try {
            const { applicationsStore, result } = this.props;

            await applicationsStore?.launch(result);
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    };

    private readonly remove = async () => {
        try {
            const { applicationsStore, result } = this.props;

            await applicationsStore?.remove(result);
        } catch (error) {
            console.error(`Failed to remove application: ${error}`);
        }
    };
}

export default withStyles(styles)(SearchRenderOption);
