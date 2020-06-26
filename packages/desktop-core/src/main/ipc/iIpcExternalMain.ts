export interface IIpcExternalMain {
    handle(channel: string, listener: (args?: any) => Promise<any> | any): void;
    whenReady(context?: string): Promise<void>;
}
