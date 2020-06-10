import { TextField } from "@material-ui/core";
import { reaction } from "mobx";
import { observer, inject, disposeOnUnmount } from "mobx-react";
import * as React from "react";
import { IFocusStore, IResizerStore, ISearchStore, IApplication } from "../../stores";

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
    private readonly expandDelay = 500;
    private readonly ref = React.createRef<HTMLInputElement>();

    public componentDidMount() {
        this.props.focusStore?.on("focus-input", this.focus);

        disposeOnUnmount(
            this,
            reaction(
                () => this.props.searchStore?.searchTerm,
                (searchTerm) => {
                    if (searchTerm !== "") {
                        this.props.resizerStore?.expand();
                    }
                },
                { delay: this.expandDelay },
            ),
        );
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
            case "Enter": {
                const { results } = this.props.searchStore!;
                if (results.length > 0) {
                    this.launch(results[0].item);
                }
                break;
            }
        }
    };

    private readonly launch = async (application: IApplication) => {
        try {
            await application.launch();
        } catch (error) {
            console.error(`Failed to launch application: ${error}`);
        }
    };
}
