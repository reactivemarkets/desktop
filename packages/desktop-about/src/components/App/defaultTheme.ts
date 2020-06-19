import { ThemeOptions } from "@material-ui/core";
import "typeface-manrope";

export const defaultTheme: ThemeOptions = {
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
            },
        },
    },
    palette: {
        primary: {
            main: "#4A90E2",
        },
        secondary: {
            main: "#485369",
        },
        text: {
            primary: "#000",
            secondary: "#fff",
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
            enterDelay: 500,
        },
    },
    typography: {
        fontFamily:
            'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
};
