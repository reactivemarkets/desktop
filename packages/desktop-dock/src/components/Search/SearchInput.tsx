import { TextField } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import * as React from "react";
import { IFocusStore, IResizerStore, ISearchStore } from "../../stores";

interface ISearchInputProps {
    readonly focusStore?: IFocusStore;
    readonly resizerStore?: IResizerStore;
    readonly searchStore?: ISearchStore;
}

@inject("focusStore")
@inject("resizerStore")
@inject("searchStore")
@observer
export class SearchInput extends React.Component<ISearchInputProps> {
    private readonly ref = React.createRef<HTMLInputElement>();

    public componentDidMount() {
        this.props.focusStore?.on("focus-input", this.focus);
    }

    public componentWillUnmount() {
        this.props.focusStore?.off("focus-input", this.focus);
    }

    public render() {
        const { searchStore } = this.props;

        const { searchTerm } = searchStore!;

        return (
            <TextField
                inputRef={this.ref}
                onKeyDown={this.onKeyDown}
                onChange={this.onChange}
                value={searchTerm}
                InputProps={{
                    disableUnderline: true,
                }}
                fullWidth
                placeholder="Search"
            />
        );
    }

    private readonly focus = () => {
        this.ref.current?.focus();
    };

    private readonly onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.searchStore?.search(event.target.value);
    };

    private readonly onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case "Escape":
                this.props.searchStore?.clear();
                this.props.resizerStore?.collapse();
                break;
        }
    };
}
