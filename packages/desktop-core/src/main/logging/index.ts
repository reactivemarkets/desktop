import { logger } from "./winstonLogger";

export * from "./iLogger";
export { logger };

console.debug = (message?: any, ...optionalParams: unknown[]) => {
    if (message === undefined) {
        return;
    }

    logger.debug(message, optionalParams);
};

console.error = (message?: any, ...optionalParams: unknown[]) => {
    if (message === undefined) {
        return;
    }

    logger.error(message, optionalParams);
};

console.info = (message?: any, ...optionalParams: unknown[]) => {
    if (message === undefined) {
        return;
    }

    logger.info(message, optionalParams);
};

console.trace = (message?: any, ...optionalParams: unknown[]) => {
    if (message === undefined) {
        return;
    }

    logger.verbose(message, optionalParams);
};

console.warn = (message?: any, ...optionalParams: unknown[]) => {
    if (message === undefined) {
        return;
    }

    logger.warn(message, optionalParams);
};
