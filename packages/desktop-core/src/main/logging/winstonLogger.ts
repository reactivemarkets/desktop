import { app } from "electron";
import * as winston from "winston";

import { ILogger } from "./iLogger";

let logPrefix = process.env.DESKTOP_LOG_PREFIX;
if (logPrefix === undefined) {
    logPrefix = "";
}

const fatalFilename = `${logPrefix}fatal.json`;
const filename = `${logPrefix}general.json`;
const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
);
const maxsize = 10_000_000;
const maxFiles = 10;
const tailable = true;

app.setAppLogsPath(process.env.DESKTOP_LOGS_PATH);
const dirname = app.getPath("logs");

let level = process.env.DESKTOP_LOG_LEVEL;
if (level === undefined) {
    level = "info";
}

export const logger: ILogger = winston.createLogger({
    exceptionHandlers: [
        new winston.transports.File({
            dirname,
            filename: fatalFilename,
            format,
            maxFiles,
            maxsize,
            tailable,
        }),
    ],
    exitOnError: false,
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
            level,
        }),
        new winston.transports.File({
            dirname,
            filename,
            format,
            level,
            maxFiles,
            maxsize,
            tailable,
        }),
    ],
});
