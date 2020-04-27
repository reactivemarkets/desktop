import { ConfigurationKind, IConfiguration, IExternalConfiguration, WellKnownNamespaces } from "../configuration";
import { ILogger } from "../logging";
import { IProcessExec } from "../processes";

import { ILauncherService } from "./iLauncherService";

export class ExternalLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly processExec: IProcessExec;

    public constructor(logger: ILogger, processExec: IProcessExec) {
        this.logger = logger;
        this.processExec = processExec;
    }

    public canLaunch = (configuration: IConfiguration) => {
        return configuration.kind === ConfigurationKind.External;
    }

    public async launch(configuration: IConfiguration) {

        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const externalConfiguration = configuration.spec as IExternalConfiguration;

        const executable = externalConfiguration.executable;

        this.logger.verbose(`launching ${namespace}/${name} from ${executable}`);

        const child = await this.processExec.exec(executable,
                                                  externalConfiguration.arguments,
                                                  externalConfiguration.env);

        this.logger.verbose(`process created with pid: (${child.pid})`);

        return Promise.resolve(configuration);
    }
}
