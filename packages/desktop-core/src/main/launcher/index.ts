import { logger } from "../logging";
import { processExec, processFork } from "../processes";
import { sessionService } from "../session";
import { windowService } from "../windowing";
import { ApplicationLauncherService } from "./applicationLauncherService";
import { CompositeLauncherService } from "./compositeLauncherService";
import { ExternalLauncherService } from "./externalLauncherService";
import { ILauncherService } from "./iLauncherService";
import { NodeServiceLauncherService } from "./nodeServiceLauncherService";
import { SessionLauncherService } from "./sessionLauncherService";
import { TrayLauncherService } from "./trayLauncherService";
import { trayService } from "../tray";
import { StorageLauncherService } from "./storageLauncherService";
import { storageService } from "../storage";
import { UpdatePolicyLauncherService } from "./updatePolicyLauncherService";
import { updateService } from "../updates";

const applicationLauncherService = new ApplicationLauncherService(logger, windowService);

const externalLauncherService = new ExternalLauncherService(logger, processExec);

const serviceLauncherService = new NodeServiceLauncherService(logger, processFork);

const sessionLauncherService = new SessionLauncherService(logger, sessionService);

const trayLauncherService = new TrayLauncherService(logger, trayService);

const storageLauncherService = new StorageLauncherService(logger, storageService);

const updateLauncherService = new UpdatePolicyLauncherService(logger, updateService);

export const launcherService: ILauncherService = new CompositeLauncherService(
    applicationLauncherService,
    serviceLauncherService,
    trayLauncherService,
    storageLauncherService,
    sessionLauncherService,
    externalLauncherService,
    updateLauncherService,
);
