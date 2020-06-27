import { Box, withTheme, WithTheme } from "@material-ui/core";
import * as React from "react";
import { AppDetails, Versions } from "../Details";

export class AppShell extends React.PureComponent<WithTheme> {
    public render() {
        const { theme } = this.props;

        return (
            <Box
                bgcolor={theme.palette.primary.main}
                className="drag"
                color={theme.palette.primary.contrastText}
                display="flex"
                flexDirection="column"
                flex={1}
            >
                <Box paddingX={4} paddingTop={4}>
                    <AppDetails />
                </Box>
                <Box flex={1} paddingBottom={2} padding={4}>
                    <Versions />
                </Box>
            </Box>
        );
    }
}

export default withTheme(AppShell);
