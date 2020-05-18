import { logger } from "./winstonLogger";

export * from "./iLogger";
export { logger };

console.debug = (message?: any, ...optionalParams: unknown[]) => {
    logger.debug(message, optionalParams);
};

console.error = (message?: any, ...optionalParams: unknown[]) => {
    logger.error(message, optionalParams);
};

console.info = (message?: any, ...optionalParams: unknown[]) => {
    logger.info(message, optionalParams);
};

console.log = (message?: any, ...optionalParams: unknown[]) => {
    logger.info(message, optionalParams);
};

console.trace = (message?: any, ...optionalParams: unknown[]) => {
    logger.verbose(message, optionalParams);
};

console.warn = (message?: any, ...optionalParams: unknown[]) => {
    logger.warn(message, optionalParams);
};
