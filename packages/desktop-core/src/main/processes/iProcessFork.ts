import { ChildProcess } from "child_process";

import { IEnvironmentVariables } from "./iEnvironmentVariables";

export interface IProcessFork {
    /**
     * Forks the current process with the given arguements and environment
     * variables.
     * @param args An array of arguments to pass to the process
     * @param env Any environment variables to pass to the process
     */
    fork(args: string[], env?: IEnvironmentVariables): Promise<ChildProcess>;
}
