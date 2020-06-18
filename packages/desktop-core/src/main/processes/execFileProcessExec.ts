import * as cp from "child_process";

import { logger } from "../logging";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessExec } from "./iProcessExec";

export class ExecFileProcessExec implements IProcessExec {
    public exec = (file: string, args?: string[], env?: IEnvironmentVariables) => {
        return new Promise<cp.ChildProcess>((resolve) => {
            logger.verbose(`execFile ${file}`);

            const options = {
                env,
            };

            const child = cp.execFile(file, args, options, (error) => {
                if (error !== null) {
                    logger.error(`error launching external executable: ${error}`);
                }
            });

            resolve(child);
        });
    };
}
