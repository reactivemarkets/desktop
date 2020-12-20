import { IconButton, Tooltip } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
import { inject } from "mobx-react";
import * as React from "react";
import { IFocusStore, IResizerStore } from "../../stores";

interface ISearchButtonProps {
    readonly focusStore?: IFocusStore;
    readonly resizerStore?: IResizerStore;
}

@inject("focusStore")
@inject("resizerStore")
export class SearchButton extends React.PureComponent<ISearchButtonProps> {
    public render() {
        return (
            <Tooltip title="Search" placement="right">
                <IconButton onClick={this.onClick}>
                    <Magnify fontSize="small" />
                </IconButton>
            </Tooltip>
        );
    }

    private readonly onClick = () => {
        this.props.resizerStore?.expand();
        this.props.focusStore?.focusInput();
    };
}
