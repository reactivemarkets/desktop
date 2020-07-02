export interface IIpcExternal {
    invoke<TData, TResult>(channel: string, data?: TData): Promise<TResult>;
    on<T>(channel: string, listener: (data: T) => void): void;
    whenReady(context?: string): Promise<void>;
}
