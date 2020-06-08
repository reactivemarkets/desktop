import {
    IConfiguration,
    ConfigurationKind,
    IServiceConfiguration,
    WellKnownNamespaces,
} from "@reactivemarkets/desktop-types";
import { ILogger } from "../logging";
import { IProcessFork } from "../processes";
import { flattenObject } from "./flatten";
import { ILauncherService } from "./iLauncherService";
import { normalizePath } from "./normalize";

export class NodeServiceLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly processFork: IProcessFork;

    public constructor(logger: ILogger, processFork: IProcessFork) {
        this.logger = logger;
        this.processFork = processFork;
    }

    public canLaunch = ({ kind }: IConfiguration) => {
        return kind === ConfigurationKind.Service;
    };

    public async launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespaces.default } = configuration.metadata;

        const serviceConfiguration = configuration.spec as IServiceConfiguration;

        const servicePath = normalizePath(serviceConfiguration.main);

        this.logger.verbose(`launching ${namespace}/${name} from ${servicePath}`);

        const args = [servicePath];

        const env = flattenObject(serviceConfiguration.options, name);

        const child = await this.processFork.fork(args, env);

        this.logger.verbose(`fork created with pid: (${child.pid})`);

        return Promise.resolve(configuration);
    }
}
