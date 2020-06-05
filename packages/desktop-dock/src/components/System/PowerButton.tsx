import { desktop } from "@reactivemarkets/desktop-sdk";
import * as React from "react";
import { Power } from "mdi-material-ui";
import ConfirmButton from "./ConfirmButton";

export class PowerButton extends React.PureComponent {
    public render() {
        return (
            <ConfirmButton onClick={this.onClick} title="shutdown">
                <Power fontSize="small" />
            </ConfirmButton>
        );
    }

    private readonly onClick = () => {
        if (desktop.isHostedInDesktop) {
            desktop.quit();
        }
    };
}
