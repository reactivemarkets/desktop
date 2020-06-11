export interface IIpcExternalMain {
    handle(channel: string, listener: (args?: any) => any): void;
    whenReady(): Promise<void>;
}
