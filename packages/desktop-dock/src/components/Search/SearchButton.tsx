import { IconButton } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
import { inject } from "mobx-react";
import * as React from "react";
import { IFocusStore, ISearchStore, IResizerStore } from "../../stores";

interface ISearchButtonProps {
    readonly focusStore?: IFocusStore;
    readonly resizerStore?: IResizerStore;
    readonly searchStore?: ISearchStore;
}

@inject("focusStore")
@inject("resizerStore")
@inject("searchStore")
export class SearchButton extends React.PureComponent<ISearchButtonProps> {
    public render() {
        return (
            <IconButton onClick={this.onClick}>
                <Magnify fontSize="small" />
            </IconButton>
        );
    }

    private readonly onClick = () => {
        this.props.searchStore?.search();
        this.props.resizerStore?.expand();
        this.props.focusStore?.focusInput();
    };
}
