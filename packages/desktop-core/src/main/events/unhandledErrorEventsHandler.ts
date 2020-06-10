import { logger } from "../logging";

export const unhandledErrorEventsHandler = () => {
    process.on("uncaughtException", (error) => {
        logger.error(`Uncaught exception: ${error}`);
    });

    process.on("unhandledRejection", (error) => {
        logger.error(`Unhandled promise rejection: ${error}`);
    });
};
