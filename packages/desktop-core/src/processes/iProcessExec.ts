import { ChildProcess } from "child_process";

import { IEnvironmentVariables } from "./iEnvironmentVariables";

export interface IProcessExec {
    exec(file: string, args?: string[], env?: IEnvironmentVariables): Promise<ChildProcess>;
}
