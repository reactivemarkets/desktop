import { routerService } from "../router";
import { ChildProcessIPCTransport } from "../transports";
import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessFork } from "./iProcessFork";

export class ApplicationEventsProcessFork implements IProcessFork {
    private readonly processFork: IProcessFork;

    public constructor(processFork: IProcessFork) {
        this.processFork = processFork;
    }

    public async fork(args: string[], env: IEnvironmentVariables) {
        return this.processFork.fork(args, env).then((child) => {
            const ipcTransport = new ChildProcessIPCTransport(child);

            const id = routerService.addTransport(ipcTransport);

            child.on("exit", () => {
                routerService.removeTransport(id);
            });

            return child;
        });
    }
}
