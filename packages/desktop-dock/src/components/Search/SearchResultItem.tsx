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
import { ListChildComponentProps } from "react-window";
import { IApplicationsStore, ISearchResult, ISearchStore } from "../../stores";
import { ConfirmButton } from "../System";
import SearchResultIcon from "./SearchResultIcon";

const styles = () =>
    createStyles({
        root: {
            "&:hover $clearIndicator": {
                visibility: "visible",
            },
        },
        clearIndicator: {
            visibility: "hidden",
        },
    });

interface ISearchResultItemProps extends ListChildComponentProps, WithStyles<typeof styles> {
    readonly applicationsStore?: IApplicationsStore;
    readonly searchStore?: ISearchStore;
}

@inject("applicationsStore")
@inject("searchStore")
class SearchResultItem extends React.Component<ISearchResultItemProps> {
    public render() {
        const { classes, data, index, style } = this.props;

        const { item } = data[index] as ISearchResult;

        const { name, icon, description } = item;

        return (
            <ListItem
                ContainerProps={{ style, className: classes.root }}
                ContainerComponent="div"
                button
                divider
                dense
                onClick={this.onClick}
            >
                {icon && (
                    <ListItemIcon>
                        <SearchResultIcon src={icon} />
                    </ListItemIcon>
                )}
                <ListItemText inset={icon === undefined} primary={name} secondary={description} />
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
            const { data, index } = this.props;

            const { item } = data[index] as ISearchResult;

            await item.launch();
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    };

    private readonly remove = async () => {
        try {
            const { applicationsStore, data, index, searchStore } = this.props;

            const { item } = data[index] as ISearchResult;

            await applicationsStore!.remove(item);

            searchStore!.search(searchStore!.searchTerm);
        } catch (error) {
            console.error(`Failed to remove application: ${error}`);
        }
    };
}

export default withStyles(styles)(SearchResultItem);
