import { inject, observer } from "mobx-react";
import * as React from "react";
import { FixedSizeList } from "react-window";
import { IApplicationsStore } from "../../stores";
import SearchResultItem from "./SearchResultItem";

interface ISearchCategoryListProps {
    readonly applicationsStore?: IApplicationsStore;
    readonly height: number;
    readonly width: number;
}

@inject("applicationsStore")
@observer
export class SearchCategoryList extends React.Component<ISearchCategoryListProps> {
    public componentDidMount() {
        this.props.applicationsStore?.load();
    }

    public render() {
        const { applicationsStore, height, width } = this.props;

        const { applications } = applicationsStore!;

        return (
            <FixedSizeList
                height={height}
                itemCount={applications.length}
                itemData={applications}
                itemSize={60}
                width={width}
            >
                {SearchResultItem}
            </FixedSizeList>
        );
    }
}
