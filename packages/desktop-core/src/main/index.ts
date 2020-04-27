import { app } from "electron";

import { cleanCommandLine, parseCommandLine } from "./configuration/commandLine";
import { logger } from "./logging";

const appName = app.name;
const isPackaged = app.isPackaged;
const appPath = app.getAppPath();
const version = app.getVersion();
const locale = app.getLocale();

logger.verbose(`Application Name: ${appName}`);
logger.verbose(`Application Path: ${appPath}`);
logger.verbose(`Application Version: ${version}`);
logger.verbose(`Application Locale: ${locale}`);
logger.verbose(`Packaged: ${isPackaged}`);

const commandLine = cleanCommandLine(process.argv);

logger.verbose("Parsing command line: ", commandLine);

parseCommandLine(commandLine, true);
