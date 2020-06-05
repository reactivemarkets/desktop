import { ListItem, ListItemText } from "@material-ui/core";
import { launcher } from "@reactivemarkets/desktop-sdk";
import * as React from "react";
import { ListChildComponentProps } from "react-window";
import { IApplication } from "../../stores";

export class SearchCategoryItem extends React.Component<ListChildComponentProps> {
    public render() {
        const { data, index, style } = this.props;

        const { configuration } = data[index] as IApplication;

        const { name } = configuration.metadata;

        return (
            <ListItem style={style} button divider dense onClick={this.onClick}>
                <ListItemText primary={name} />
            </ListItem>
        );
    }

    private readonly onClick = async () => {
        try {
            const { data, index } = this.props;

            const { configuration } = data[index] as IApplication;

            await launcher.launch(configuration);
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    };
}
