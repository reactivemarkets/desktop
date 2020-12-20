import * as React from "react";
import { SearchAutocompleteContainer } from "./SearchAutocompleteContainer";

interface ISearchProps {
    readonly endAdornment?: React.ReactNode;
    readonly startAdornment?: React.ReactNode;
}

export class Search extends React.PureComponent<ISearchProps> {
    public render() {
        return <SearchAutocompleteContainer {...this.props} />;
    }
}
