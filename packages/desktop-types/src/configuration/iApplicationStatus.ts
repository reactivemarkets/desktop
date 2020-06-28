import { ApplicationState } from "./applicationState";

export interface IApplicationStatus {
    readonly height: number;
    readonly message?: string;
    readonly osProcessId: number;
    readonly processId: number;
    readonly startTime: Date;
    readonly state: ApplicationState;
    readonly width: number;
    readonly windowId: number;
    readonly x: number;
    readonly y: number;
}
