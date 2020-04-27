import { App } from "electron";

export const disableRemoteEventsHandler = (app: App) => {
    app.on("remote-require", (event) => {
        event.preventDefault();
    });

    app.on("remote-get-builtin", (event) => {
        event.preventDefault();
    });

    app.on("remote-get-global", (event) => {
        event.preventDefault();
    });

    app.on("remote-get-current-window", (event) => {
        event.preventDefault();
    });

    app.on("remote-get-current-web-contents", (event) => {
        event.preventDefault();
    });
};
