export interface IServiceStatus {
    readonly message?: string;
    readonly pid: number;
    readonly startTime: Date;
}
