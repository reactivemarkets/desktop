import { LeveledLogMethod } from "winston";

export interface ILogger {
    debug: LeveledLogMethod;
    error: LeveledLogMethod;
    info: LeveledLogMethod;
    verbose: LeveledLogMethod;
    warn: LeveledLogMethod;
}
