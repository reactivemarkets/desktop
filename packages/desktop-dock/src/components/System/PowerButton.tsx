import { desktop } from "@reactivemarkets/desktop-sdk";
import { Power } from "mdi-material-ui";
import * as React from "react";
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
