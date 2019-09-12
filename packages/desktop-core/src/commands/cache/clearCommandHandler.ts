import { app, session } from "electron";

import { logger } from "../../logging";

import { CacheArea } from "./cacheArea";
import { IClearOptions } from "./iClearOptions";

export const handler = (options: IClearOptions) => {

    logger.verbose("clear command ran.");

    app.once("ready", () => {

        const defaultSession = session.defaultSession;
        if (defaultSession === undefined) {
            return;
        }

        const { area = CacheArea.Http } = options;

        switch (area) {
            case CacheArea.HostResolver:
                defaultSession
                    .clearHostResolverCache()
                    .then(() => {
                        logger.info("Host resolver cache cleared");
                    })
                    .catch(() => {
                        logger.error("Failed to clear the host resolver cache.");
                    })
                    .finally(() => {
                        app.exit();
                    });
                break;
            case CacheArea.Http:
                defaultSession
                    .clearCache()
                    .then(() => {
                        logger.info("HTTP session cache cleared.");
                    })
                    .catch(() => {
                        logger.error("Failed to clear the session's HTTP cache.");
                    })
                    .finally(() => {
                        app.exit();
                    });
            default:
                app.exit();
        }
    });
};
