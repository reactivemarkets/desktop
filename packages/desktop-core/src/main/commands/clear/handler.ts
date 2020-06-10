import { app, session } from "electron";
import { logger } from "../../logging";
import { CacheArea } from "./cacheArea";
import { IClearOptions } from "./iClearOptions";

export const handler = async (options: IClearOptions) => {
    logger.verbose("Clear command ran.");

    await app.whenReady();

    const { area = CacheArea.Http, authType, partition } = options;

    const currentSession = partition !== undefined ? session.fromPartition(partition) : session.defaultSession;
    if (currentSession === undefined) {
        return;
    }

    switch (area) {
        case CacheArea.Auth:
            try {
                await currentSession.clearAuthCache({ type: authType });
                logger.info("Auth password cache cleared");
                app.exit();
            } catch (error) {
                logger.error("Failed to clear the auth password cache.");
                app.exit(1);
            }
            break;
        case CacheArea.HostResolver:
            try {
                await currentSession.clearHostResolverCache();
                logger.info("Host resolver cache cleared");
                app.exit();
            } catch (error) {
                logger.error("Failed to clear the host resolver cache.");
                app.exit(1);
            }
            break;
        case CacheArea.Http:
            try {
                await currentSession.clearCache();
                logger.info("HTTP session cache cleared.");
                app.exit();
            } catch (error) {
                logger.error("Failed to clear the session's HTTP cache.");
                app.exit(1);
            }
            break;
        case CacheArea.StorageData:
            try {
                await currentSession.clearStorageData();
                logger.info("Storage data cleared.");
                app.exit();
            } catch (error) {
                logger.error("Failed to clear the session's storage data.");
                app.exit(1);
            }
            break;
        default:
            app.exit();
    }
};
