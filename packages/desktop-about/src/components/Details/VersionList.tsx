import { inject, observer } from "mobx-react";
import * as React from "react";
import { IDesktopDetailsStore } from "../../stores";
import TitleValue from "./TitleValue";

interface IVersionListProps {
    readonly detailsStore?: IDesktopDetailsStore;
}

@inject("detailsStore")
@observer
export class VersionList extends React.Component<IVersionListProps> {
    public render() {
        const { details } = this.props.detailsStore!;
        if (details?.versions === undefined) {
            return null;
        }

        return Object.entries(details.versions)
            .sort(([a], [b]) => {
                if (a < b) {
                    return -1;
                }

                if (a > b) {
                    return 1;
                }

                return 0;
            })
            .map(([name, version]) => {
                return <TitleValue key={name} title={name} value={version} />;
            });
    }
}
