import { desktop, globalShortcut, screen, window } from "@reactivemarkets/desktop-sdk";
import * as React from "react";

export class AppGlobalShortcut extends React.PureComponent {
    public componentDidMount() {
        if (desktop.isHostedInDesktop) {
            globalShortcut.register("Control+Shift+Space", this.reposition);
        }
    }

    public componentWillUnmount() {
        if (desktop.isHostedInDesktop) {
            globalShortcut.unregister("Control+Shift+Space", this.reposition);
        }
    }

    public render() {
        return null;
    }

    private readonly reposition = async () => {
        try {
            const display = await screen.getCursorScreenDisplay();

            const currentWindow = window.current();

            await currentWindow.center(display);

            await currentWindow.moveTop();

            await desktop.focus();

            await currentWindow.focus();
        } catch (error) {
            console.error(error);
        }
    };
}
