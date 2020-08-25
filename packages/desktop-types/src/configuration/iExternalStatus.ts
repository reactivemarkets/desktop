export interface IExternalStatus {
    /**
     * A human readable message.
     */
    readonly message?: string;
    /**
     * The OS pid of the process.
     */
    readonly pid: number;
    /**
     * The start time of the external application.
     */
    readonly startTime: Date;
}
