import { App } from "electron";
import { logger } from "../logging";
import { shellService } from "../shell";

/**
 * Configures the app to block navigation, redirects and new window attempts.
 *
 * https://electronjs.org/docs/tutorial/security#11-verify-webview-options-before-creation
 * https://www.electronjs.org/docs/tutorial/security#12-disable-or-limit-navigation
 * https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows
 *
 * @param app The main electron app
 */
export const whiteListNavigationEventsHandler = (app: App) => {
    app.on("web-contents-created", (_, contents) => {
        contents.on("will-navigate", (__, navigationUrl) => {
            const parsedUrl = new URL(navigationUrl);

            logger.warn(`The application has navigated to the following address: ${parsedUrl}`);
        });

        contents.on("will-redirect", (__, navigationUrl) => {
            logger.warn(`The application has redirected to the following address: ${navigationUrl}`);
        });

        contents.on("will-attach-webview", (__, webPreferences) => {
            delete webPreferences.preload;

            webPreferences.nodeIntegration = false;
            webPreferences.sandbox = true;
        });

        contents.on("new-window", async (event, navigationUrl) => {
            try {
                event.preventDefault();

                logger.warn(
                    `The application tried to open a new window at the following address: ${navigationUrl}. This attempt was blocked, opening in browser instead.`,
                );

                await shellService.openExternal(navigationUrl);
            } catch (error) {
                logger.error(`Can't open external url`, error);
            }
        });
    });
};
