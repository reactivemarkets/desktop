import { Fade, Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { IDesktopDetailsStore } from "../../stores";
import Title from "./Title";
import { observable, action } from "mobx";

interface IAppDetailsProps {
    readonly detailsStore?: IDesktopDetailsStore;
}

@inject("detailsStore")
@observer
export class AppDetails extends React.Component<IAppDetailsProps> {
    @observable
    public loaded = false;

    @action
    public componentDidMount() {
        this.loaded = true;
    }

    public render() {
        const { detailsStore } = this.props;

        const { details } = detailsStore!;

        const name = details?.appName ?? "Desktop";
        const version = details?.appVersion ?? "0.0.0";

        return (
            <Fade in={this.loaded} timeout={1000}>
                <Grid container wrap="nowrap" alignItems="center" justify="center" spacing={4}>
                    <Grid item>
                        <img src="icon.png" width={80} />
                    </Grid>
                    <Grid item>
                        <Grid item container direction="column" spacing={1}>
                            <Grid item>
                                <Title>{name}</Title>
                            </Grid>
                            <Grid item>
                                <Title>{version}</Title>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
        );
    }
}
