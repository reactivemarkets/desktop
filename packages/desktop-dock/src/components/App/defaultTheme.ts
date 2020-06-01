import { ThemeOptions } from "@material-ui/core";

export const defaultTheme: ThemeOptions = {
    palette: { type: "dark" },
    props: {
        MuiTooltip: {
            arrow: true,
            enterDelay: 500,
        },
    },
};
