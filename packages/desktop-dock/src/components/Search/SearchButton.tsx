import { IconButton } from "@material-ui/core";
import { desktop, window } from "@reactivemarkets/desktop-sdk";
import { Magnify } from "mdi-material-ui";
import * as React from "react";

export class SearchButton extends React.PureComponent {
    public render() {
        return (
            <IconButton onClick={this.onClick}>
                <Magnify fontSize="small" />
            </IconButton>
        );
    }

    private readonly onClick = () => {
        if (desktop.isHostedInDesktop) {
            window.current().setBounds({ height: 400 });
        }
    };
}
