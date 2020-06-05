import { ListItem, ListItemText } from "@material-ui/core";
import { launcher } from "@reactivemarkets/desktop-sdk";
import * as React from "react";
import { ListChildComponentProps } from "react-window";
import { ISearchResult } from "../../stores";

export class SearchResultItem extends React.Component<ListChildComponentProps> {
    public render() {
        const { data, index, style } = this.props;

        const { item } = data[index] as ISearchResult;

        const { name, description } = item;

        return (
            <ListItem style={style} button divider dense onClick={this.onClick}>
                <ListItemText primary={name} secondary={description} />
            </ListItem>
        );
    }

    private readonly onClick = async () => {
        try {
            const { data, index } = this.props;

            const { item } = data[index] as ISearchResult;

            await launcher.launch(item.configuration);
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    };
}
