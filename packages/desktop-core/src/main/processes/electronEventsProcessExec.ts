import { app } from "electron";

import { logger } from "../logging";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessExec } from "./iProcessExec";

export class ElectronEventsProcessExec implements IProcessExec {
    private readonly processExec: IProcessExec;

    public constructor(processExec: IProcessExec) {
        this.processExec = processExec;
    }

    public async exec(file: string, args?: string[], env?: IEnvironmentVariables) {
        const child = await this.processExec.exec(file, args, env);

        app.once("quit", () => {
            if (!child.killed) {
                logger.verbose("application quit, killing any children");
                child.kill();
            }
        });

        return child;
    }
}
