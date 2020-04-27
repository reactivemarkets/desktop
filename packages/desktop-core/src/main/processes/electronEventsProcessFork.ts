import { app } from "electron";

import { logger } from "../logging";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessFork } from "./iProcessFork";

export class ElectronEventsProcessFork implements IProcessFork {
    private readonly processFork: IProcessFork;

    public constructor(processFork: IProcessFork) {
        this.processFork = processFork;
    }

    public async fork(args: string[], env: IEnvironmentVariables) {
        return this
            .processFork
            .fork(args, env)
            .then((child) => {

                app.once("quit", () => {
                    if (!child.killed) {

                        logger.verbose("application quit, killing any children");
                        child.kill();
                    }
                });

                return child;
            });
    }
}
