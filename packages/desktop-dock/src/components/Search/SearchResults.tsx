import * as React from "react";
import { List } from "@material-ui/core";
import { SearchResultList } from "./SearchResultList";

export class SearchResults extends React.PureComponent {
    public render() {
        return (
            <List disablePadding>
                <SearchResultList />
            </List>
        );
    }
}
