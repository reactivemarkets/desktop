import { Box } from "@material-ui/core";
import * as React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { SearchResultList } from "./SearchResultList";

export class SearchCategories extends React.PureComponent {
    public render() {
        return (
            <Box height="100%" width="100%">
                <AutoSizer>{(size) => <SearchResultList {...size} />}</AutoSizer>
            </Box>
        );
    }
}
