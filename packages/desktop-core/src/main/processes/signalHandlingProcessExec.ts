import { logger } from "../logging";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessExec } from "./iProcessExec";

export class SignalHandlingProcessExec implements IProcessExec {
    private readonly processExec: IProcessExec;
    private readonly terminatingSignals: NodeJS.Signals[];

    public constructor(processFork: IProcessExec, ...terminatingSignals: NodeJS.Signals[]) {
        this.processExec = processFork;
        this.terminatingSignals = terminatingSignals;
    }

    public async exec(file: string, args?: string[], env?: IEnvironmentVariables) {
        return this.processExec.exec(file, args, env).then((child) => {
            this.terminatingSignals.forEach((signal) => {
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
