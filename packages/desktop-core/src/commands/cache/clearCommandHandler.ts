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
                defaultSession.clearHostResolverCache(() => {
                    logger.info("Host resolver cache cleared");
                    app.exit();
                });
                break;
            case CacheArea.Http:
                defaultSession.clearCache(() => {
                    logger.info("Http cache cleared");
                    app.exit();
                });
            default:
                app.exit();
        }
    });
};
