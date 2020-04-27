import { App } from "electron";
import { logger } from "../logging";

/**
 * Configures the app to block navigation, redirects and new window attempts.
 *
 * https://electronjs.org/docs/tutorial/security#11-verify-webview-options-before-creation
 * https://www.electronjs.org/docs/tutorial/security#12-disable-or-limit-navigation
 * https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows
 *
 * @param app The main electron app
 */
export const whiteListNavigationEvents = (app: App) => {
    app.on("web-contents-created", (_, contents) => {
        contents.on("will-navigate", (event, navigationUrl) => {
            const parsedUrl = new URL(navigationUrl);

            logger.warn(
                `The application tried to redirect to the following address: '${parsedUrl}'. This attempt was blocked.`,
            );

            event.preventDefault();
        });

        contents.on("will-redirect", (event, navigationUrl) => {
            logger.warn(
                `The application tried to redirect to the following address: '${navigationUrl}'. This attempt was blocked.`,
            );

            event.preventDefault();
        });

        contents.on("will-attach-webview", (__, webPreferences) => {
            delete webPreferences.preload;
            webPreferences.nodeIntegration = false;
        });

        contents.on("new-window", async (event, navigationUrl) => {
            logger.warn(
                `The application tried to open a new window at the following address: '${navigationUrl}'. This attempt was blocked.`,
            );

            event.preventDefault();
        });
    });
};
