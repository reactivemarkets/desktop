export interface ITransport {
    off<T>(channel: string, callback: (data: T) => void): ITransport;
    on<T>(channel: string, callback: (data: T) => void): ITransport;
    once<T>(channel: string, callback: (data: T) => void): ITransport;
    send<T>(channel: string, data: T): void;
}
