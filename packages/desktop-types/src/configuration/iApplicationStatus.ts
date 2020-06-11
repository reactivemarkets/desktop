import { ApplicationState } from "./applicationState";

export interface IApplicationStatus {
    readonly message?: string;
    readonly osProcessId: number;
    readonly processId: number;
    readonly startTime?: Date;
    readonly state: ApplicationState;
    readonly windowId: number;
}
