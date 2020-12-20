import { ThemeOptions } from "@material-ui/core";

export const darkTheme: ThemeOptions = {
    overrides: {
        MuiCssBaseline: {
            "@global": {
                ".drag": {
                    "-webkit-app-region": "drag",
                },
                ".no-drag": {
                    "-webkit-app-region": "no-drag",
                },
                "::-webkit-scrollbar": {
                    height: 12,
                    width: 12,
                },
                "::-webkit-scrollbar-corner": {
                    background: "transparent",
                },
                "::-webkit-scrollbar-thumb": {
                    background: "rgba(255, 255, 255, 0.12)",
                    boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
                },
                "::-webkit-scrollbar-thumb:active": {
                    background: "#fff",
                    boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.3)",
                },
                "::-webkit-scrollbar-thumb:hover": {
                    background: "rgba(255, 255, 255, 0.08)",
                },
                "::-webkit-scrollbar-track": {
                    boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.1)",
                },
                "::selection": {
                    background: "#FEBF00",
                    color: "#000000",
                },
                "#app": {
                    display: "flex",
                    flex: 1,
                },
                body: {
                    display: "flex",
                    height: "100vh",
                    overflow: "hidden",
                    userSelect: "none",
                },
                input: {
                    caretColor: "#FEBF00",
                },
            },
        },
        MuiListItem: {
            dense: {
                paddingTop: 2,
                paddingBottom: 2,
            },
            gutters: {
                paddingLeft: 16,
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 40,
            },
        },
        MuiListItemText: {
            inset: {
                paddingLeft: 42,
            },
        },
        MuiTab: {
            root: {
                "@media (min-width: 600px)": {
                    minWidth: 48,
                },
                fontSize: 13,
                minHeight: 40,
                minWidth: 48,
                padding: "4px 8px",
                textTransform: "capitalize",
            },
        },
        MuiTabs: {
            root: {
                minHeight: 40,
            },
            scrollButtons: {
                width: 16,
            },
        },
    },
    palette: {
        primary: {
            main: "#4A90E2",
        },
        secondary: {
            main: "#4A90E2",
        },
        type: "dark",
    },
    props: {
        MuiTooltip: {
            arrow: true,
            enterDelay: 500,
        },
    },
    typography: {
        body2: {
            fontSize: 13,
            fontWeight: 500,
        },
    },
};
