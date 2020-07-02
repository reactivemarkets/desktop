export interface IIpcExternalMain {
    broadcast<T>(channel: string, data: T): void;
    handle(channel: string, listener: (args?: any) => Promise<any> | any): void;
    on<T>(channel: string, listener: (sender: any, data: T) => void): void;
    whenReady(context?: string): Promise<void>;
}
