import { Box, Typography } from "@material-ui/core";
import * as React from "react";

export class Copyright extends React.PureComponent {
    public render() {
        const year = new Date().getFullYear();

        return (
            <Box padding={1}>
                <Typography color="textSecondary" variant="caption">
                    Copyright © {year} Reactive Markets Limited. All rights reserved.
                </Typography>
            </Box>
        );
    }
}
