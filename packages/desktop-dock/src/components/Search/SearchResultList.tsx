import { inject, observer } from "mobx-react";
import * as React from "react";
import { IApplicationsStore } from "../../stores";
import { SearchResultItem } from "./SearchResultItem";

interface ISearchResultListProps {
    readonly applicationsStore?: IApplicationsStore;
}

@inject("applicationsStore")
@observer
export class SearchResultList extends React.Component<ISearchResultListProps> {
    public componentDidMount() {
        this.props.applicationsStore?.load();
    }

    public render() {
        const { applications } = this.props.applicationsStore!;

        return applications.map((application) => {
            return <SearchResultItem key={application.key} application={application} />;
        });
    }
}
