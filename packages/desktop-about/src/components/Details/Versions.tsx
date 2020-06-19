import { Grid } from "@material-ui/core";
import * as React from "react";
import { VersionList } from "./VersionList";

export class Versions extends React.PureComponent {
    public render() {
        return (
            <Grid container spacing={2} wrap="wrap">
                <VersionList />
            </Grid>
        );
    }
}
