import { Fade, Grid } from "@material-ui/core";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import * as React from "react";
import { VersionList } from "./VersionList";

@observer
export class Versions extends React.Component {
    @observable
    public loaded = false;

    @action
    public componentDidMount() {
        this.loaded = true;
    }

    public render() {
        return (
            <Fade in={this.loaded} timeout={1000}>
                <Grid container spacing={2} wrap="wrap" justify="space-between">
                    <VersionList />
                </Grid>
            </Fade>
        );
    }
}
