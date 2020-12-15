import { logger } from "../logging";
import { processExec, processFork } from "../processes";
import { sessionService } from "../session";
import { windowService } from "../windowing";
import { ApplicationLauncherService } from "./applicationLauncherService";
import { CompositeLauncherService } from "./compositeLauncherService";
import { ExternalLauncherService } from "./externalLauncherService";
import { ILauncherService } from "./iLauncherService";
import { ServiceLauncherService } from "./serviceLauncherService";
import { registryService } from "../registry";
import { SessionLauncherService } from "./sessionLauncherService";
import { TrayLauncherService } from "./trayLauncherService";
import { StorageLauncherService } from "./storageLauncherService";
import { storageService } from "../storage";
import { trayService } from "../tray";
import { UpdatePolicyLauncherService } from "./updatePolicyLauncherService";
import { updateService } from "../updates";
import { ApplicationSecurityPolicyLauncherService } from "./applicationSecurityPolicyLauncherService";
import { ExternalSecurityPolicyLauncherService } from "./externalSecurityPolicyLauncherService";
import { ServiceSecurityPolicyLauncherService } from "./serviceSecurityPolicyLauncherService";
import { SecurityPolicyLauncherService } from "./securityPolicyLauncherService";

const applicationLauncherService = new ApplicationLauncherService(logger, windowService);

const applicationPolicyLauncherService = new ApplicationSecurityPolicyLauncherService(
    logger,
    applicationLauncherService,
    registryService,
);

const externalLauncherService = new ExternalLauncherService(logger, processExec);

const externalPolicyLauncherService = new ExternalSecurityPolicyLauncherService(
    logger,
    externalLauncherService,
    registryService,
);

const serviceLauncherService = new ServiceLauncherService(logger, processFork);

const servicePolicyLauncherService = new ServiceSecurityPolicyLauncherService(
    logger,
    serviceLauncherService,
    registryService,
);

const sessionLauncherService = new SessionLauncherService(logger, sessionService);

const storageLauncherService = new StorageLauncherService(logger, storageService);

const trayLauncherService = new TrayLauncherService(logger, trayService);

const updateLauncherService = new UpdatePolicyLauncherService(logger, updateService);

const securityPolicyLauncherService = new SecurityPolicyLauncherService();

export const launcherService: ILauncherService = new CompositeLauncherService(
    applicationPolicyLauncherService,
    servicePolicyLauncherService,
    trayLauncherService,
    storageLauncherService,
    sessionLauncherService,
    updateLauncherService,
    securityPolicyLauncherService,
    externalPolicyLauncherService,
);
