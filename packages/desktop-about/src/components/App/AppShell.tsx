import { Box, withTheme, WithTheme } from "@material-ui/core";
import * as React from "react";
import { AppDetails, Versions, Copyright } from "../Details";

export class AppShell extends React.PureComponent<WithTheme> {
    public render() {
        const { theme } = this.props;

        return (
            <Box display="flex" flexDirection="column" flex={1}>
                <Box paddingX={4} paddingBottom={3} paddingTop={4}>
                    <AppDetails />
                </Box>
                <Box flex={1} bgcolor={theme.palette.secondary.dark} paddingBottom={2} padding={4}>
                    <Versions />
                </Box>
                <Box bgcolor={theme.palette.secondary.dark} paddingLeft={2}>
                    <Copyright />
                </Box>
            </Box>
        );
    }
}

export default withTheme(AppShell);
