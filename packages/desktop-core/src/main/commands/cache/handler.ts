import { app, session } from "electron";

import { logger } from "../../logging";

import { CacheArea } from "./cacheArea";
import { IClearOptions } from "./iClearOptions";

export const handler = async (options: IClearOptions) => {
    logger.verbose("Clear command ran.");

    await app.whenReady();

    const defaultSession = session.defaultSession;
    if (defaultSession === undefined) {
        return;
    }

    const { area = CacheArea.Http } = options;
    switch (area) {
        case CacheArea.HostResolver:
            try {
                await defaultSession.clearHostResolverCache();
                logger.info("Host resolver cache cleared");
                app.exit();
            } catch (error) {
                logger.error("Failed to clear the host resolver cache.");
                app.exit(1);
            }
            break;
        case CacheArea.Http:
            try {
                await defaultSession.clearCache();
                logger.info("HTTP session cache cleared.");
                app.exit();
            } catch (error) {
                logger.error("Failed to clear the session's HTTP cache.");
                app.exit(1);
            }
            break;
        default:
            app.exit();
    }
};
