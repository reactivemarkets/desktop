import { app } from "electron";

import { cleanCommandLine, parseCommandLine } from "./configuration/commandLine";
import { logger } from "./logging";

const appName = app.getName();
const appPath = app.getAppPath();
const appVersion = app.getVersion();
const locale = app.getLocale();

logger.verbose(`Application Name: ${appName}`);
logger.verbose(`Application Path: ${appPath}`);
logger.verbose(`Application Version: ${appVersion}`);
logger.verbose(`Application Locale: ${locale}`);

const commandLine = cleanCommandLine(process.argv);

logger.verbose("Parsing command line: ", commandLine);

parseCommandLine(commandLine, true);
