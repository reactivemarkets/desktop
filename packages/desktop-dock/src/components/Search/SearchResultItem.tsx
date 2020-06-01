import * as React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { IApplication } from "../../stores";
import { launcher } from "@reactivemarkets/desktop-sdk";

interface ISearchResultItemProps {
    readonly application: IApplication;
}

export class SearchResultItem extends React.Component<ISearchResultItemProps> {
    public render() {
        const { name, description } = this.props.application;

        return (
            <ListItem button divider dense onClick={this.onClick}>
                <ListItemText primary={name} secondary={description} />
            </ListItem>
        );
    }

    private readonly onClick = async () => {
        try {
            const { configuration } = this.props.application;

            await launcher.launch(configuration);
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    };
}
