import { Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IDesktopDetailsStore } from "../../stores";
import TitleValue from "./TitleValue";

interface IAppDetailsProps {
    readonly detailsStore?: IDesktopDetailsStore;
}

@inject("detailsStore")
@observer
export class AppDetails extends React.Component<IAppDetailsProps> {
    public render() {
        const { detailsStore } = this.props;

        const { details } = detailsStore!;

        const name = details?.name ?? "Desktop";
        const version = details?.appVersion ?? "0.0.0";

        return (
            <Grid container wrap="nowrap" alignItems="center" spacing={4}>
                <Grid item>
                    <img src="icon.png" width={80} />
                </Grid>
                <Grid item container direction="column" spacing={1}>
                    <TitleValue title="Name" value={name} />
                    <TitleValue title="Version" value={version} />
                </Grid>
            </Grid>
        );
    }
}
