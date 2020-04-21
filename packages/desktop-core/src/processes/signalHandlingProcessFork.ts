import { logger } from "../logging";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessFork } from "./iProcessFork";

export class SignalHandlingProcessFork implements IProcessFork {
    private readonly processFork: IProcessFork;
    private readonly terminatingSignals: NodeJS.Signals[];

    public constructor(processFork: IProcessFork, ...terminatingSignals: NodeJS.Signals[]) {
        this.processFork = processFork;
        this.terminatingSignals = terminatingSignals;
    }

    public async fork(args: string[], env: IEnvironmentVariables) {
        return this
            .processFork
            .fork(args, env)
            .then((child) => {

                this.terminatingSignals
                    .forEach((signal) => {

                        process.once(signal, () => {
                            if (!child.killed) {

                                logger.verbose(`received ${signal}, killing any children`);
                                child.kill(signal);
                            }
                        });
                    });

                return child;
            });
    }
}
