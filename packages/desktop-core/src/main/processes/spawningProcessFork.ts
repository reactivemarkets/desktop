import * as cp from "child_process";

import { logger } from "../logging";

import { IEnvironmentVariables } from "./iEnvironmentVariables";
import { IProcessFork } from "./iProcessFork";

export class SpawningProcessFork implements IProcessFork {
    public fork = async (args: string[], env: IEnvironmentVariables) => {
        return new Promise<cp.ChildProcess>((resolve) => {
            const execPath = process.execPath;
            logger.verbose(`spawning ${execPath} with args: ${args}`);

            const child = cp.spawn(process.execPath, args, {
                env,
                stdio: ["inherit", "inherit", "inherit", "ipc"],
            });

            resolve(child);
        });
    };
}
