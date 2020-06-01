import { logger } from "../logging";
import { processExec, processFork } from "../processes";
import { sessionService } from "../session";
import { windowService } from "../windowing";

import { ApplicationLauncherService } from "./applicationLauncherService";
import { CompositeLauncherService } from "./compositeLauncherService";
import { ElectronServiceLauncherService } from "./electronServiceLauncherService";
import { ExternalLauncherService } from "./externalLauncherService";
import { ILauncherService } from "./iLauncherService";
import { NodeServiceLauncherService } from "./nodeServiceLauncherService";
import { SessionConfigurationLauncherService } from "./sessionConfigurationLauncherService";
import { TrayConfigurationLauncherService } from "./trayConfigurationLauncherService";
import { trayService } from "../tray";

const applicationLauncherService = new ApplicationLauncherService(logger, windowService);

const externalLauncherService = new ExternalLauncherService(logger, processExec);

const serviceLauncherService = new NodeServiceLauncherService(logger, processFork);

const electronServiceLauncherService = new ElectronServiceLauncherService(logger, windowService);

const sessionConfigurationLauncherService = new SessionConfigurationLauncherService(logger, sessionService);

const trayConfigurationLauncherService = new TrayConfigurationLauncherService(logger, trayService);

export const launcherService: ILauncherService = new CompositeLauncherService(
    applicationLauncherService,
    electronServiceLauncherService,
    serviceLauncherService,
    sessionConfigurationLauncherService,
    trayConfigurationLauncherService,
    externalLauncherService,
);
