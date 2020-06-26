import { inject, observer } from "mobx-react";
import * as React from "react";
import { FixedSizeList } from "react-window";
import { ISearchStore } from "../../stores";
import SearchResultItem from "./SearchResultItem";

interface ISearchResultListProps {
    readonly height: number;
    readonly searchStore?: ISearchStore;
    readonly width: number;
}

@inject("searchStore")
@observer
export class SearchResultList extends React.Component<ISearchResultListProps> {
    public render() {
        const { height, searchStore, width } = this.props;

        const { results } = searchStore!;

        return (
            <FixedSizeList
                height={height}
                itemCount={results.length}
                itemData={results.slice()}
                itemSize={60}
                width={width}
            >
                {SearchResultItem}
            </FixedSizeList>
        );
    }
}
