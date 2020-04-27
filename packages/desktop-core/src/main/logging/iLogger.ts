import { LeveledLogMethod } from "winston";

export interface ILogger {
    error: LeveledLogMethod;
    info: LeveledLogMethod;
    verbose: LeveledLogMethod;
    warn: LeveledLogMethod;
}
