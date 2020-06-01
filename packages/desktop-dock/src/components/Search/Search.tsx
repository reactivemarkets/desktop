import { Grid } from "@material-ui/core";
import * as React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

export class Search extends React.PureComponent {
    public render() {
        return (
            <Grid container wrap="nowrap" alignItems="center">
                <SearchButton />
                <SearchInput />
            </Grid>
        );
    }
}
