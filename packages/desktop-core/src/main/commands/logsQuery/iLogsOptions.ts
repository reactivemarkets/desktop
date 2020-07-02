import { Output } from "../../configuration";

export interface ILogsOptions {
    readonly context?: string;
    readonly details?: boolean;
    readonly follow?: boolean;
    readonly tail?: number;
    readonly output: Output;
    readonly uid: string;
}
