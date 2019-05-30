// tslint:disable:no-any no-unsafe-any no-console
import { logger } from "./winstonLogger";

export * from "./iLogger";
export { logger };

console.error = (message?: any, ...optionalParams: any[]) => {
    logger.error(message, optionalParams);
};

console.info = (message?: any, ...optionalParams: any[]) => {
    logger.info(message, optionalParams);
};

console.log = (message?: any, ...optionalParams: any[]) => {
    logger.info(message, optionalParams);
};

console.trace = (message?: any, ...optionalParams: any[]) => {
    logger.verbose(message, optionalParams);
};

console.warn = (message?: any, ...optionalParams: any[]) => {
    logger.warn(message, optionalParams);
};
