import { Output } from "../../configuration";

export interface ILogsOptions {
    readonly context?: string;
    readonly limit?: number;
    readonly output: Output;
    readonly uid: string;
}
