import { TextField } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import * as React from "react";
import { ISearchStore } from "../../stores";

interface ISearchInputProps {
    readonly searchStore?: ISearchStore;
}

@inject("searchStore")
@observer
export class SearchInput extends React.Component<ISearchInputProps> {
    public render() {
        const { searchStore } = this.props;

        const { searchTerm } = searchStore!;

        return (
            <TextField
                onKeyDown={this.onKeyDown}
                onChange={this.onChange}
                value={searchTerm}
                InputProps={{ disableUnderline: true }}
                fullWidth
                placeholder="Search"
            />
        );
    }

    private readonly onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.searchStore?.search(event.target.value);
    };

    private readonly onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case "Escape":
                this.props.searchStore?.clear();
                break;
        }
    };
}
