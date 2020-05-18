import {
    ConfigurationKind,
    IConfiguration,
    IServiceConfiguration,
    ServiceHost,
    WellKnownNamespaces,
} from "../configuration";
import { ILogger } from "../logging";
import { IProcessFork } from "../processes";

import { flattenObject } from "./flatten";
import { ILauncherService } from "./iLauncherService";
import { normalize } from "./normalize";

export class NodeServiceLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly processFork: IProcessFork;

    public constructor(logger: ILogger, processFork: IProcessFork) {
        this.logger = logger;
        this.processFork = processFork;
    }

    public canLaunch = (configuration: IConfiguration) => {
        if (configuration.kind !== ConfigurationKind.Service) {
            return false;
        }

        const serviceConfiguration = configuration.spec as IServiceConfiguration;

        return serviceConfiguration.host === ServiceHost.Node;
    };

    public async launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const serviceConfiguration = configuration.spec as IServiceConfiguration;

        const servicePath = normalize(serviceConfiguration.main);

        this.logger.verbose(`launching ${namespace}/${name} from ${servicePath}`);

        const args = [servicePath];

        const env = flattenObject(serviceConfiguration.options, name);

        const child = await this.processFork.fork(args, env);

        this.logger.verbose(`fork created with pid: (${child.pid})`);

        return Promise.resolve(configuration);
    }
}
